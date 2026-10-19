import { messages } from '@/assets/messages';
import { useForgotPassword } from '@/features/register/hooks/useForgotPassword';
import { Button } from '@/features/shared/atoms/button';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';

import {
  ActionsButtonWrapper,
  CancelWrapper,
  RecoverPassContainer,
  RecoverPasswordWrapper,
} from './style';

export const ForgotPasswordForm = () => {
  const { mail } = messages.label;
  const { recoverPassword, cancel } = messages.texts;

  const { control, onSubmit, handleBackButton } = useForgotPassword();

  return (
    <RecoverPassContainer onSubmit={onSubmit}>
      <Title className="accessTitle" size={'xl'} isBold>
        {recoverPassword}
      </Title>

      <ControlInput
        control={control}
        name="email"
        label={mail}
        type="email"
        isRequired
        isFullWidth
      />

      <ActionsButtonWrapper>
        <CancelWrapper>
          <Button type="button" variant="secondary" onClick={handleBackButton} isFullWidth>
            {cancel}
          </Button>
        </CancelWrapper>

        <RecoverPasswordWrapper>
          <Button type="submit" onClick={onSubmit} isFullWidth>
            {recoverPassword}
          </Button>
        </RecoverPasswordWrapper>
      </ActionsButtonWrapper>
    </RecoverPassContainer>
  );
};
