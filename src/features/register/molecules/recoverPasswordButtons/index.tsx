import { messages } from '@/assets/messages';
import { useUpdatePassword } from '@/features/register/hooks/useForgotPassword';
import { Button } from '@/features/shared/atoms/button';

import { ButtonWrapper, OptionButton } from './style';

export const RecoverPasswordActions = () => {
  const { back, updatePassword } = messages.texts;

  const { handleCancelButton } = useUpdatePassword();

  return (
    <OptionButton>
      <ButtonWrapper>
        <Button variant="secondary" type="button" onClick={handleCancelButton} isFullWidth>
          {back}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button type="submit" isFullWidth>
          {updatePassword}
        </Button>
      </ButtonWrapper>
    </OptionButton>
  );
};
