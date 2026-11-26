import { useState } from 'react';

import { messages } from '@/assets/messages';
import { useProfilePersonalDataForm } from '@/features/profile/hooks/useProfilePersonalDataForm';
import { ProfilePersonalForm } from '@/features/profile/organisms/profilePersonalDataForm';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';

import {
  Divider,
  ProfilePersonalDataPageInfo,
  ProfilePersonalDataPageWrapper,
  ProfilePersonalTitle,
} from './style';

export const ProfilePersonalDataPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { control, typeDocument, onChangeDocumentType, errors, onSubmitPersonalData } =
    useProfilePersonalDataForm();

  const { personalData } = messages.titles;
  const onClickEdit = () => setIsEditing(true);

  return (
    <ProfilePersonalDataPageWrapper onSubmit={onSubmitPersonalData}>
      <ProfilePersonalDataPageInfo>
        <ProfilePersonalTitle>
          <Icon icon="userDataEdit" color="primary600" size={6} />
          <Title isBold size="xl">{personalData}</Title>
        </ProfilePersonalTitle>

        <Divider />

        <ProfilePersonalForm
          control={control}
          typeDocument={typeDocument}
          onChangeDocumentType={onChangeDocumentType}
          errors={errors}
          onClickEdit={onClickEdit}
          isEditing={isEditing}
        />
      </ProfilePersonalDataPageInfo>
    </ProfilePersonalDataPageWrapper>
  );
};
