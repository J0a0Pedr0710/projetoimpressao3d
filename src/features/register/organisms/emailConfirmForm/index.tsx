import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useForgotPassword } from '@/features/register/hooks/useForgotPassword';
import { ConfirmationEmailMessage } from '@/features/register/molecules/confirmEmailMessage';
import { EmailConfirmActions } from '@/features/register/molecules/emailConfirmActions';

import { EmailConfirmContainer } from './style';

export const EmailConfirmForm = () => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const { handleBackButton } = useForgotPassword();

  const [searchParams] = useSearchParams();
  const receivedEmail = searchParams.get('email') || '';

  useEffect(() => {
    let intervalId: number;

    if (isTimerActive && timeLeft > 0) {
      intervalId = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsTimerActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTimerActive, timeLeft]);

  const handleResendEmail = () => {
    setTimeLeft(60);
    setIsTimerActive(true);
  };

  return (
    <EmailConfirmContainer>
      <ConfirmationEmailMessage email={receivedEmail} />

      <EmailConfirmActions
        timeLeft={timeLeft}
        isTimerActive={isTimerActive}
        onBack={handleBackButton}
        onResend={handleResendEmail}
      />
    </EmailConfirmContainer>
  );
};
