import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { Icon } from '@/features/shared/atoms/icons';
import { Text } from '@/features/shared/atoms/text';

import type { ILoginActions } from './types';

export const LoginActions = ({ onSignUpClick, isGoogleLoginAvailable = false }: ILoginActions) => {
  const { createNewAccount, stillNoAccount, signWithGoogle } = messages.texts;

  return (
    <>
      <Text isBold>{stillNoAccount}</Text>
      <Button type="button" variant="secondary" onClick={onSignUpClick}>
        {createNewAccount}
      </Button>
      {isGoogleLoginAvailable && (
        <Button type="button" variant="secondary">
          <Icon icon={'googleIcon'} size={4} />
          {signWithGoogle}
        </Button>
      )}
    </>
  );
};
