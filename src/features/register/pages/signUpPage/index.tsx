import { SignUpForm } from '@/features/register/organisms/signUpForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';

export const SignUpPage = () => {
  return (
    <LoginTemplate>
      <SignUpForm />
    </LoginTemplate>
  );
};
