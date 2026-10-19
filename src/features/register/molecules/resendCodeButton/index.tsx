import { messages } from '@/assets/messages';
import { Button } from '@/features/shared/atoms/button';

import { ResendButton } from './style';
import type { IResendCodeButton } from './types';

export const ResendCodeButton = ({
  isTimerActive,
  isLoading,
  timeLeft,
  onResendCode,
}: IResendCodeButton) => {
  const { iDontReceiveCode } = messages.texts;

  const isDisplayTime = isTimerActive && timeLeft > 0;

  return (
    <ResendButton>
      <Button
        type="button"
        variant="secondary"
        disabled={isTimerActive || isLoading}
        isFullWidth
        onClick={onResendCode}
      >
        {iDontReceiveCode}
        {isDisplayTime && ` ${timeLeft}s`}
      </Button>
    </ResendButton>
  );
};
