import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';

import { BackButton, OptionButton, SubmitButton } from './style';
import type { IEmailConfirmActions } from './types';

export const EmailConfirmActions = ({
  timeLeft,
  isTimerActive,
  onBack,
  onResend,
}: IEmailConfirmActions) => {
  const { back, iDontReceiveEmail } = messages.texts;

  const isDisplayTime = isTimerActive && timeLeft > 0;

  return (
    <OptionButton>
      <BackButton>
        <Button type="button" variant="secondary" isFullWidth onClick={onBack}>
          {back}
        </Button>
      </BackButton>
      <SubmitButton>
        <Button
          type="submit"
          disabled={isTimerActive && timeLeft > 0}
          isFullWidth
          onClick={onResend}
        >
          {iDontReceiveEmail}
          {isDisplayTime && ` (${timeLeft}s)`}
        </Button>
      </SubmitButton>
    </OptionButton>
  );
};
