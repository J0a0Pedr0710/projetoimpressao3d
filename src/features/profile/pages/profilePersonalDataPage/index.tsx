import { messages } from '@/assets/messages';
import { useProfilePersonalDataForm } from '@/features/profile/hooks/useProfilePersonalDataForm';
import { ProfilePersonalForm } from '@/features/profile/organisms/profilePersonalDataForm';
import { Title } from '@/features/shared/atoms/title';

import { Divider, Teste, Wrapper } from './style';

export const ProfilePersonalDataPage = () => {
  const { control, typeDocument, onChangeDocumentType, errors, onSubmitPersonalData } =
    useProfilePersonalDataForm();

  const { personalData } = messages.titles;

  return (
    <Wrapper onSubmit={onSubmitPersonalData}>
      <Teste>
        <Title isBold>{personalData}</Title>

        <Divider />

        <ProfilePersonalForm
          control={control}
          typeDocument={typeDocument}
          onChangeDocumentType={onChangeDocumentType}
          errors={errors}
        />
      </Teste>
    </Wrapper>
  );
};
