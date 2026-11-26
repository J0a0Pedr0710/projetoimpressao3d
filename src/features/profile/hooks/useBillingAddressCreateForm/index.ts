import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

import { type FieldPath, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ILocationZipCodeResponse } from 'response';

import { messages } from '@/assets/messages';
import { useBillingAddress } from '@/contexts';
import { locationController } from '@/controllers/location';
import {
  type IBillingAddressData,
  billingAddressFormSchema,
} from '@/schemas/billingAddress';
import { verifyCep } from '@/utils/verify/verifyCep';

const country = 'BR';

export const useBillingAddressCreateForm = () => {
  const navigate = useNavigate();
  const { addBillingAddress } = useBillingAddress();

  const {
    control,
    setValue,
    getValues,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IBillingAddressData>(billingAddressFormSchema);

  const cep = watch('billingAddress.cep');

  const [disableFields, setDisableFields] = useState<(keyof ILocationZipCodeResponse)[]>([]);
  const [isCepValid, setIsCepValid] = useState(false);

  useEffect(() => {
    setValue('billingAddress.country', country);
  }, [setValue]);

  useEffect(() => {
    const fields = [
      'city',
      'state',
      'street',
      'neighborhood',
      'stateAbbreviation',
    ] as const satisfies readonly (keyof ILocationZipCodeResponse)[];

    if (!cep) {
      setDisableFields([]);
      setIsCepValid(false);
      return;
    }

    if (!verifyCep({ cep, shortCountry: country })) {
      setIsCepValid(false);
      setDisableFields([]);
      clearErrors('billingAddress.cep');
      return;
    }

    setIsCepValid(false);
    setDisableFields([]);
    clearErrors('billingAddress.cep');

    let isCurrentRequest = true;

    locationController
      .getLocation(cep, country)
      .then((response) => {
        if (!isCurrentRequest) return;
        setIsCepValid(true);
        clearErrors('billingAddress.cep');
        const newDisabledFields: (keyof ILocationZipCodeResponse)[] = [];
        fields.forEach((field) => {
          const value = response[field];
          if (value) {
            setValue(`billingAddress.${field}` as FieldPath<IBillingAddressData>, value);
            newDisabledFields.push(field);
          }
        });
        setDisableFields(newDisabledFields);
      })
      .catch(() => {
        if (!isCurrentRequest) return;
        setIsCepValid(false);
        setDisableFields([...fields]);
        setError('billingAddress.cep', { type: 'manual', message: messages.error.zipCodeError });
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [cep]);

  const onSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    clearErrors();

    const data = getValues();
    const addressCep = data.billingAddress?.cep ?? '';

    if (!verifyCep({ cep: addressCep, shortCountry: country }) || !isCepValid) {
      setError('billingAddress.cep', { type: 'manual', message: messages.error.zipCodeError });
      return;
    }

    const success = await addBillingAddress({
      billingAddress: {
        name: data.billingAddress.name,
        telephone: data.billingAddress.telephone,
        cep: addressCep.replace(/\D/g, ''),
        country,
        city: data.billingAddress.city,
        state: data.billingAddress.state,
        street: data.billingAddress.street,
        number: data.billingAddress.number,
        complement: data.billingAddress.complement ?? '',
        neighborhood: data.billingAddress.neighborhood,
      },
    });

    if (success) navigate('/profile/billing-addresses');
  };

  return { control, onSubmit, errors, disableFields, setValue };
};
