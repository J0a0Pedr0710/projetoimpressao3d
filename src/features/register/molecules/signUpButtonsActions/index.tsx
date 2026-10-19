import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';
import { GridItem } from '@/features/shared/atoms/gridItem';

import type { ISignUpButtonsActions } from './types';

export const SignUpButtonsActions = ({ backButton }: ISignUpButtonsActions) => {
  const { cancel, createAccount } = messages.texts;

  return (
    <>
      <GridItem cols={{ base: 12, lg: 6 }}>
        <Button onClick={backButton} type="button" variant="secondary" isFullWidth>
          {cancel}
        </Button>
      </GridItem>
      <GridItem cols={{ base: 12, lg: 6 }}>
        <Button type="submit" isFullWidth>
          {createAccount}
        </Button>
      </GridItem>
    </>
  );
};
