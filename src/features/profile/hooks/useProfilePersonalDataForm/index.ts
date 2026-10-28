import { useEffect } from 'react';
import type { FormEvent } from 'react';

import type { IDocumentsOptions, IProfilePersonalDataInputModel } from 'props';
import { type FieldPath, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { brazilCountry } from '@/constants/countries';
import { useApp, useAuth, useProfile } from '@/contexts';
import { profileController } from '@/controllers/profileController';
import {
  type IProfileData,
  profileDataSchema,
  profilePersonalDataSchema,
} from '@/schemas/profileData';
import { ETypeDocuments } from '@/types/enum';
import { formatDocumentByType } from '@/utils/format/formatDocument';
import { setFormValues } from '@/utils/services/setFormValues';
import { verifyDocumentByType } from '@/utils/verify/verifyDocuments';

export const useProfilePersonalDataForm = () => {
  const { unknownError, invalidDocument } = messages.error;
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

  const { documents } = watch();
  const typeDocument: ETypeDocuments =
    (documents?.[0]?.typeDocument as ETypeDocuments) ?? ETypeDocuments.CPF;

  const { openAlert, setLoading } = useApp();
  const { profile, setProfile } = useProfile();
  const { user, token } = useAuth();

  useEffect(() => {
    if (profile && token) {
      setFormValues(setValue, {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
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
        telephone: profile.telephone,
        address: {
          country: profile.address?.country ?? '',
          cep: profile.address?.cep ?? '',
          city: profile.address?.city ?? '',
          state: profile.address?.state ?? '',
          street: profile.address?.street ?? '',
          number: profile.address?.number ?? '',
          complement: profile.address?.complement ?? '',
          neighborhood: profile.address?.neighborhood ?? '',
          stateAbbreviation: profile.address?.shortState ?? '',
        },
        ddi: brazilCountry.ddi,
      });
    }
  }, [profile, token]);

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

    setLoading(true);
    profileController
      .updateProfile(formattedData)
      .then(() => {
        openAlert(messages.success.successEdit, 'success');
        setProfile((currentProfile) => ({
          ...currentProfile,
          firstName: formattedData.firstName,
          lastName: formattedData.lastName,
          email: formattedData.email,
          documents: formattedData.documents,
        }));
        navigate('/profile');
      })
      .catch((errorMessage) => {
        openAlert(errorMessage ? errorMessage : unknownError, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChangeDocumentType = (document: IDocumentsOptions) => {
    setValue('documents.0.typeDocument', document.value);
  };

  return {
    fullname: user ? `${user.firstName} ${user.lastName}` : '',
    control,
    onSubmitPersonalData,
    setValue,
    typeDocument,
    errors,
    onChangeDocumentType,
  };
};
