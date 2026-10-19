import { useSignUp } from '@/features/register/hooks/useSignUp';
import { EmailVerifiedActions } from '@/features/register/molecules/emailVerifiedActions';
import { EmailVerifiedMessage } from '@/features/register/molecules/emailVerifiedMessage';

import { VerifiedSuccessContainer } from './style';

export const EmailVerifiedForm = () => {
  const { handleAccessProject, handleEditProfile } = useSignUp();

  return (
    <VerifiedSuccessContainer>
      <EmailVerifiedMessage />
      <EmailVerifiedActions onAccessClick={handleAccessProject} onEditClick={handleEditProfile} />
    </VerifiedSuccessContainer>
  );
};
