/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

import type {
  IDocumentsOptions,
  IProfileAddressDataInputModel,
  IProfilePersonalDataInputModel,
} from 'props';
import { type FieldPath, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
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
  profilePersonalDataSchema,
} from '@/schemas/profileData';
import { ETypeDocuments } from '@/types/enum';
import { formatDocumentByType } from '@/utils/format/formatDocument';
import { formatPhoneNumber } from '@/utils/format/formatPhone';
import { getCountryMask } from '@/utils/services/getCountryMask';
import { setFormValues } from '@/utils/services/setFormValues';
import { verifyCep } from '@/utils/verify/verifyCep';
import { verifyDocumentByType } from '@/utils/verify/verifyDocuments';

export const useProfileForm = () => {
  const { unknownError, invalidDocument } = messages.error;
  const navigate = useNavigate();
  const { addressId } = useParams<{ addressId: string }>();

  const {
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IProfileData>(profileDataSchema);

  const { address, documents, ddi } = watch();
  const cep = address?.cep;
  const country = 'BR';
  const typeDocument: ETypeDocuments =
    (documents?.[0]?.typeDocument as ETypeDocuments) ?? ETypeDocuments.CPF;

  const { openAlert, setLoading } = useApp();
  const { profile, setProfile } = useProfile();
  const { user, token } = useAuth();

  const [disableFields, setDisableFields] = useState<(keyof ILocationZipCodeResponse)[]>([]);
  const initialCepRef = useRef<string | null>(null);
  const userEditedCepRef = useRef<boolean>(false);

  const [isCepValid, setIsCepValid] = useState(false);

  useEffect(() => {
    if (address?.country !== country) {
      setValue('address.country', country);
    }
  }, [address?.country, country, setValue]);

  useEffect(() => {
    if (profile?.address && token) {
      setLoading(false);

      const addressToLoad = addressId
        ? profile.addresses?.find((addr) => addr.id === addressId)
        : profile.address;

      if (!addressToLoad) return;

      setFormValues(setValue, {
        address: {
          country,
          number: addressToLoad.number,
          street: addressToLoad.street,
          cep: getCountryMask(brazilCountry.short)(addressToLoad.cep),
          city: addressToLoad.city,
          complement: addressToLoad.complement,
          neighborhood: addressToLoad.neighborhood,
          state: addressToLoad.state,
          stateAbbreviation: addressToLoad.shortState || addressToLoad.state,
        },
        documents: profile.documents
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
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        ddi: brazilCountry.ddi,
        telephone: formatPhoneNumber({
          phone: profile.telephone,
          shortCountry: brazilCountry.short,
        }),
      });
    }
  }, [profile, addressId]);

  useEffect(() => {
    const fields = [
      'city',
      'state',
      'street',
      'neighborhood',
      'stateAbbreviation',
    ] as const satisfies readonly (keyof ILocationZipCodeResponse)[];

    if (initialCepRef.current === null && typeof cep === 'string') {
      initialCepRef.current = cep;
    }

    const currentCep = cep ?? '';
    if (initialCepRef.current !== null && currentCep !== initialCepRef.current) {
      userEditedCepRef.current = true;
    }

    if (!cep) {
      setDisableFields([]);
      return;
    }

    if (!verifyCep({ cep: currentCep, shortCountry: country })) {
      setIsCepValid(false);
      setDisableFields([]);
      return;
    }

    if (!userEditedCepRef.current) {
      setDisableFields([...fields]);
      setIsCepValid(true);
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

  const saveProfileData = (
    data: IProfilePersonalDataInputModel | IProfileAddressDataInputModel,
    updateProfile: () => void,
  ) => {
    setLoading(true);
    const updateCall = addressId
      ? profileController.updateProfileAddress(addressId, data as IProfileAddressDataInputModel)
      : profileController.updateProfile(data);

    updateCall
      .then(() => {
        openAlert(messages.success.successEdit, 'success');
        updateProfile();
        navigate('/profile');
      })
      .catch((errorMessage) => {
        openAlert(errorMessage ? errorMessage : unknownError, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmitPersonalData = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    clearErrors();

    const data = getValues();
    const validation = profilePersonalDataSchema.safeParse({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      documents: data.documents,
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

    const document = validation.data.documents[0];
    if (!verifyDocumentByType(document.valueDocument, document.typeDocument as ETypeDocuments)) {
      setError('documents.0.valueDocument', { message: invalidDocument });
      return;
    }

    const formattedData: IProfilePersonalDataInputModel = {
      firstName: validation.data.firstName,
      lastName: validation.data.lastName,
      email: validation.data.email,
      documents: validation.data.documents.map((item) => ({
        typeDocument: item.typeDocument as ETypeDocuments,
        valueDocument: item.valueDocument,
      })),
    };

    saveProfileData(formattedData, () => {
      setProfile((currentProfile) => ({
        ...currentProfile,
        firstName: formattedData.firstName,
        lastName: formattedData.lastName,
        email: formattedData.email,
        documents: formattedData.documents,
      }));
    });
  };

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
        cep: address.cep,
        country,
        city: address.city ?? '',
        state: address.state ?? '',
        street: address.street,
        number: address.number,
        complement: address.complement ?? '',
        neighborhood: address.neighborhood,
      },
    };

    saveProfileData(formattedData, () => {
      setProfile((currentProfile) => ({
        ...currentProfile,
        telephone: formattedData.telephone,
        address: {
          ...currentProfile.address,
          ...formattedData.address,
          shortState: data.address.stateAbbreviation ?? address.state ?? '',
        },
        addresses: (currentProfile.addresses ?? []).map((profileAddress) =>
          profileAddress.isDefault
            ? {
                ...profileAddress,
                ...formattedData.address,
                shortState: data.address.stateAbbreviation ?? address.state ?? '',
              }
            : profileAddress,
        ),
      }));
    });
  };

  const onChangeDocumentType = (document: IDocumentsOptions) => {
    setValue('documents.0.typeDocument', document.value);
  };

  const customSetValue = (route: any, value: any, options?: any) => {
    setValue(route, value, options);
  };

  const hook = {
    fullname: user ? `${user.firstName} ${user.lastName}` : '',
    control,
    onSubmitPersonalData,
    onSubmitAddressData,
    country,
    typeDocument,
    errors,
    customSetValue,
    onChangeDocumentType,
    ddi,
    disableFields,
  };
  return hook;
};
