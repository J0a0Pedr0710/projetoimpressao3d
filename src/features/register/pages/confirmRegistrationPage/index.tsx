import { ConfirmRegistrationForm } from '@/features/register/organisms/confirmRegistrationForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';

import { ConfirmEmailContainer } from './style';

export const ConfirmRegistrationPage = () => {
  return (
    <LoginTemplate>
      <ConfirmEmailContainer>
        <ConfirmRegistrationForm />
      </ConfirmEmailContainer>
    </LoginTemplate>
  );
};
