import { EmailConfirmForm } from '@/features/register/organisms/emailConfirmForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';

export const EmailConfirmPage = () => {
  return (
    <LoginTemplate>
      <EmailConfirmForm />
    </LoginTemplate>
  );
};
