import { ForgotPasswordForm } from '@/features/register/organisms/forgotPasswordForm';
import { LoginTemplate } from '@/features/register/templates/loginTemplate';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';

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
