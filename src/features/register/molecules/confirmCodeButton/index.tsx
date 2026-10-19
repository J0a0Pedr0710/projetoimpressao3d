import { messages } from '@/assets/messages';
import { ConfirmButton } from '@/features/register/molecules/confirmCodeButton/style';
import type { IConfirmCodeButton } from '@/features/register/molecules/confirmCodeButton/types';
import { Button } from '@/features/shared/atoms/button';

export const ConfirmCodeButton = ({ isLoading }: IConfirmCodeButton) => {
  const { confirmAccount } = messages.texts;

  return (
    <ConfirmButton>
      <Button type="submit" isFullWidth isLoading={isLoading} disabled={isLoading}>
        {confirmAccount}
      </Button>
    </ConfirmButton>
  );
};
