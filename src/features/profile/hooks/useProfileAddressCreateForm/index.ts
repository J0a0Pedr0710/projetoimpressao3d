import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

import type { IProfileAddressDataInputModel } from 'props';
import { type FieldPath, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ILocationZipCodeResponse } from 'response';

import { messages } from '@/assets/messages';
import { brazilCountry } from '@/constants/countries';
import { useApp, useAuth, useProfile } from '@/contexts';
import { locationController } from '@/controllers/location';
import { profileController } from '@/controllers/profileController';
import {
  type IProfileData,
  profileAddressDataSchema,
  profileDataSchema,
} from '@/schemas/profileData';
import type { ETypeDocuments } from '@/types/enum';
import { formatDocumentByType } from '@/utils/format/formatDocument';
import { verifyCep } from '@/utils/verify/verifyCep';

export const useProfileAddressCreateForm = () => {
  const { unknownError } = messages.error;
  const navigate = useNavigate();

  const {
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IProfileData>(profileDataSchema);

  const { address } = watch();
  const cep = address?.cep;
  const country = 'BR';

  const { openAlert, setLoading } = useApp();
  const { profile, profileUpdate } = useProfile();
  const { token } = useAuth();

  const [disableFields, setDisableFields] = useState<(keyof ILocationZipCodeResponse)[]>([]);
  const [isCepValid, setIsCepValid] = useState(false);

  useEffect(() => {
    if (address?.country !== country) {
      setValue('address.country', country);
    }
  }, [address?.country, country, setValue]);

  useEffect(() => {
    if (profile && token) {
      setValue('firstName', profile.firstName);
      setValue('lastName', profile.lastName);
      setValue('email', profile.email);
      setValue('ddi', brazilCountry.ddi);
      setValue(
        'documents',
        profile.documents
          .filter(
            (document): document is { typeDocument: ETypeDocuments; valueDocument: string } =>
              document.typeDocument !== null && document.valueDocument !== null,
          )
          .map((document) => ({
            ...document,
            valueDocument: formatDocumentByType({
              document: document.valueDocument,
              type: document.typeDocument,
            }),
          })),
      );
    }
  }, [profile, token]);

  useEffect(() => {
    const fields = [
      'city',
      'state',
      'street',
      'neighborhood',
      'stateAbbreviation',
    ] as const satisfies readonly (keyof ILocationZipCodeResponse)[];

    const currentCep = cep ?? '';

    if (!cep) {
      setDisableFields([]);
      setIsCepValid(false);
      return;
    }

    if (!verifyCep({ cep: currentCep, shortCountry: country })) {
      setIsCepValid(false);
      setDisableFields([]);
      clearErrors('address.cep');
      return;
    }

    setIsCepValid(false);
    setDisableFields([]);
    clearErrors('address.cep');

    let isCurrentRequest = true;

    locationController
      .getLocation(cep, country)
      .then((response) => {
        if (!isCurrentRequest) return;

        setIsCepValid(true);
        clearErrors('address.cep');
        const newDisabledFields: (keyof ILocationZipCodeResponse)[] = [];
        fields.forEach((field) => {
          const value = response[field];
          if (value) {
            setValue(`address.${field}`, value);
            newDisabledFields.push(field);
          }
        });
        setDisableFields(newDisabledFields);
      })
      .catch(() => {
        if (!isCurrentRequest) return;

        if (country === 'BR') {
          setIsCepValid(false);
          setDisableFields([...fields]);
          setError('address.cep', {
            type: 'manual',
            message: messages.error.zipCodeError,
          });
        } else {
          setIsCepValid(true);
          setDisableFields([]);
          clearErrors('address.cep');
        }
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [cep, country]);

  const onSubmitAddressData = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    clearErrors();

    const data = getValues();
    const addressCep = data.address?.cep ?? '';
    if (
      !verifyCep({ cep: addressCep, shortCountry: country }) ||
      (country === 'BR' && !isCepValid)
    ) {
      setError('address.cep', {
        type: 'manual',
        message: messages.error.zipCodeError,
      });
      return;
    }

    const validation = profileAddressDataSchema.safeParse({
      telephone: data.telephone,
      address: {
        ...data.address,
        country,
      },
    });

    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        setError(issue.path.join('.') as FieldPath<IProfileData>, {
          type: 'manual',
          message: issue.message,
        });
      });
      return;
    }

    const { address, telephone } = validation.data;
    const formattedData: IProfileAddressDataInputModel = {
      telephone,
      address: {
        cep: address.cep.replace(/\D/g, ''),
        country,
        city: address.city ?? '',
        state: address.state ?? '',
        street: address.street,
        number: address.number,
        complement: address.complement ?? '',
        neighborhood: address.neighborhood,
      },
    };

    setLoading(true);
    profileController
      .addAddress(formattedData)
      .then(() => {
        openAlert(messages.success.addressAdded, 'success');
        profileUpdate();
        navigate('/profile');
      })
      .catch((errorMessage) => {
        openAlert(errorMessage ? errorMessage : unknownError, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    control,
    onSubmitAddressData,
    country,
    errors,
    disableFields,
    setValue,
  };
};
