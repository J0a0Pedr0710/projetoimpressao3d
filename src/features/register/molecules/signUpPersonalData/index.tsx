import { messages } from '@/assets/messages';
import { GridItem } from '@/features/shared/atoms/gridItem';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { CountrySelect } from '@/features/shared/molecules/countrySelect';
import { Select } from '@/features/shared/molecules/select';
import { ETypeDocuments } from '@/types/enum';
import { formatDocumentByType } from '@/utils/format/formatDocument';

import type { ISignUpPersonalData } from './types';

export const SignUpPersonalData = ({
  control,
  clearErrors,
  errors,
  setValue,
  country,
  typeDocument,
  options,
}: ISignUpPersonalData) => {
  const { createProject3DAccount, personalData } = messages.titles;
  const { typeDocumentLabel, document, firstName, lastName } = messages.label;

  return (
    <>
      <GridItem cols={{ base: 12 }}>
        <Title size={'2xl'} isBold>
          {createProject3DAccount}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <Title size={'xl'} isBold>
          {personalData}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          isFullWidth
          control={control}
          name="firstName"
          label={firstName}
          isRequired
          errorMessage={errors?.firstName?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          isFullWidth
          control={control}
          name="lastName"
          label={lastName}
          isRequired
          errorMessage={errors?.lastName?.message}
        />
      </GridItem>
      <GridItem cols={{ base: 8, lg: 6 }} zIndex={4}>
        <CountrySelect
          value={country}
          onChange={(option) => {
            if (option && option.value && typeof option.value === 'string') {
              setValue('country', option.value);
              setValue('document.valueDocument', '', { shouldValidate: false });
            }
          }}
        />
      </GridItem>
      <GridItem cols={{ base: 6 }} spacing={4} zIndex={2}>
        <Select
          width={'full'}
          value={typeDocument}
          label={typeDocumentLabel}
          options={options}
          onChange={(option) => {
            if (option && option.value && typeof option.value === 'string') {
              setValue('document.typeDocument', option.value as ETypeDocuments);
              setValue('document.valueDocument', '', { shouldValidate: false });
              clearErrors('document.valueDocument');
            }
          }}
          isRequired
          defaultValue={ETypeDocuments.CPF}
          isSearchable={false}
        />
      </GridItem>
      <GridItem cols={{ base: 6 }} spacing={4}>
        <ControlInput
          isFullWidth
          control={control}
          name="document.valueDocument"
          label={document}
          isRequired
          mask={(value) => formatDocumentByType({ document: value, type: typeDocument })}
          maxLength={18}
          errorMessage={errors?.document?.valueDocument?.message}
        />
      </GridItem>
    </>
  );
};
