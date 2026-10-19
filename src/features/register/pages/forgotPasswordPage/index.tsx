import { ForgotPasswordForm } from '@/features/register/organisms/forgotPasswordForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';
import { GridContainer } from '@/features/shared/atoms/gridContainer';
import { GridItem } from '@/features/shared/atoms/gridItem';

export const ForgotPasswordPage = () => {
  return (
    <LoginTemplate>
      <GridContainer spacing={{ base: 3, xs: 0 }} size={1}>
        <GridItem cols={{ base: 12, sm: 6 }}>
          <ForgotPasswordForm />
        </GridItem>
      </GridContainer>
    </LoginTemplate>
  );
};
