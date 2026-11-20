import { messages } from '@/assets/messages';
import { typeDocuments } from '@/constants/typeDocument';
import { useApp } from '@/contexts';
import { Button } from '@/features/shared/atoms/button';
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
  onClickEdit,
  isEditing,
}: IProfilePersonalData) => {
  const { loading } = useApp();
  const { firstName, lastName, typeDocumentLabel, document, mail } = messages.label;

  const { updateData, editData } = messages.texts;

  return (
    <>
      <GridContainer size={12} spacing={{ base: 2, sm: 4 }}>
        <GridItem cols={{ base: 6 }}>
          <ControlInput
            name="firstName"
            control={control}
            label={firstName}
            isRequired
            isFullWidth
            errorMessage={errors.firstName?.message}
          />
        </GridItem>
        <GridItem cols={{ base: 6 }}>
          <ControlInput
            name="lastName"
            control={control}
            label={lastName}
            isRequired
            isFullWidth
            errorMessage={errors.lastName?.message}
          />
        </GridItem>
        <GridItem cols={{ base: 12, sm: 6 }} zIndex={1}>
          <Select
            onChange={(value) => onChangeDocumentType(value as IDocumentsOptions)}
            value={typeDocument ?? ETypeDocuments.CPF}
            options={typeDocuments}
            label={typeDocumentLabel}
            isRequired
            width={'full'}
            isSearchable={false}
            disabled={!isEditing}
          />
        </GridItem>
        <GridItem cols={{ base: 12 }} />
        <GridItem cols={{ base: 12, sm: 6 }}>
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
            disabled={!isEditing}
          />
        </GridItem>
        <GridItem cols={{ base: 12, sm: 6 }}>
          <ControlInput
            control={control}
            name="email"
            label={mail}
            isRequired
            isFullWidth
            disabled={!isEditing}
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 12 }} justify="end" spacing={2}>
          <Button variant="secondary" type="button" isSkeleton={loading} onClick={onClickEdit}>
            {editData}
          </Button>

          <Button variant="primary" type="submit" isSkeleton={loading}>
            {updateData}
          </Button>
        </GridItem>
      </GridContainer>
    </>
  );
};
