import { useProfileForm } from '@/features/profile/hooks/useProfileForm';
import { ProfilePersonalForm } from '@/features/profile/organisms/profilePersonalDataForm';

import { Wrapper } from './styles';

export const ProfilePersonalDataPage = () => {
  const {
    control,
    typeDocument,
    onChangeDocumentType,
    errors,
    onSubmitPersonalData,
  } = useProfileForm();

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
