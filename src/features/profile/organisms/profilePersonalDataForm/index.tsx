import { messages } from '@/assets/messages';
import { typeDocuments } from '@/constants/typeDocument';
import { useApp } from '@/contexts';
import { Button } from '@/features/shared/atoms/button';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Select } from '@/features/shared/molecules/select';
import { ETypeDocuments } from '@/types/enum';
import type { IDocumentsOptions } from '@/types/props';
import { formatDocumentByType } from '@/utils/format/formatDocument';

import type { IProfilePersonalData } from './types';

export const ProfilePersonalForm = ({
  control,
  typeDocument,
  onChangeDocumentType,
  errors,
}: IProfilePersonalData) => {
  const { loading } = useApp();
  const { firstName, lastName, typeDocumentLabel, document, mail } = messages.label;
  const { personalData } = messages.titles;
  const { updateData } = messages.texts;

  return (
    <>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <GridItem cols={{ base: 12 }}>
          <Title isBold size="xl" isLoading={loading}>
            {personalData}
          </Title>
        </GridItem>

        <GridItem cols={{ base: 2 }}>
          <ControlInput
            name="firstName"
            control={control}
            label={firstName}
            isRequired
            isFullWidth
            errorMessage={errors.firstName?.message}
          />
        </GridItem>

        <GridItem cols={{ base: 2 }}>
          <ControlInput
            name="lastName"
            control={control}
            label={lastName}
            isRequired
            isFullWidth
            errorMessage={errors.lastName?.message}
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 1 }} zIndex={1}>
          <Select
            onChange={(value) => onChangeDocumentType(value as IDocumentsOptions)}
            value={typeDocument ?? ETypeDocuments.CPF}
            options={typeDocuments}
            label={typeDocumentLabel}
            isRequired
            width={'full'}
            isSearchable={false}
            disabled
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 1 }}>
          <ControlInput
            control={control}
            name="documents.0.valueDocument"
            label={document}
            isRequired
            isFullWidth
            mask={(value) =>
              formatDocumentByType({ document: value, type: typeDocument ?? ETypeDocuments.CPF })
            }
            errorMessage={errors.documents?.[0]?.valueDocument?.message}
            disabled
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 2 }}>
          <ControlInput
            control={control}
            name="email"
            label={mail}
            isRequired
            isFullWidth
            disabled
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 6 }}>
          <Button variant="primary" type="submit" isFullWidth isSkeleton={loading}>
            {updateData}
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};
