import { useProfilePersonalDataForm } from '@/features/profile/hooks/useProfilePersonalDataForm';
import { ProfilePersonalForm } from '@/features/profile/organisms/profilePersonalDataForm';

import { Wrapper } from './style';

export const ProfilePersonalDataPage = () => {
  const { control, typeDocument, onChangeDocumentType, errors, onSubmitPersonalData } =
    useProfilePersonalDataForm();

  return (
    <Wrapper onSubmit={onSubmitPersonalData}>
      <ProfilePersonalForm
        control={control}
        typeDocument={typeDocument}
        onChangeDocumentType={onChangeDocumentType}
        errors={errors}
      />
    </Wrapper>
  );
};
