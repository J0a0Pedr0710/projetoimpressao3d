import { EmailVerifiedForm } from '@/features/register/organisms/emailVerifiedForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';

export const EmailVerifiedPage = () => {
  return (
    <LoginTemplate>
      <EmailVerifiedForm />
    </LoginTemplate>
  );
};
