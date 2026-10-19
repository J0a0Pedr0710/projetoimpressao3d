import { RecoverPasswordForm } from '@/features/register/organisms/recoverPasswordForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';

export const RecoverPasswordPage = () => {
  return (
    <LoginTemplate>
      <RecoverPasswordForm />
    </LoginTemplate>
  );
};
