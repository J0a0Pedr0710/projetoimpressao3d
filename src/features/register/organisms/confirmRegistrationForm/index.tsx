import type React from 'react';
import { useEffect } from 'react';

import { useSignUp } from '@/features/register/hooks/useSignUp';
import { ConfirmCodeButton } from '@/features/register/molecules/confirmCodeButton';
import { ConfirmationCodeInput } from '@/features/register/molecules/confirmationCodeInput';
import { ConfirmationMessage } from '@/features/register/molecules/confirmationMessage';
import { ResendCodeButton } from '@/features/register/molecules/resendCodeButton';

import { ButtonGroupWrapper, ConfirmEmailForm } from './style';

export const ConfirmRegistrationForm = () => {
  const {
    confirmationCode,
    setValue,
    isLoading,
    timeLeft,
    isTimerActive,
    handleConfirmSubmit: originalHandleConfirmSubmit,
    handleResendCode,
    userEmailForConfirmation,
    errors,
  } = useSignUp();

  useEffect(() => {
    setValue('confirmationCode', '', { shouldValidate: false });
  }, [setValue]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const onlyDigits = value.replace(/\D/g, '');
    setValue('confirmationCode', onlyDigits, { shouldValidate: true });
  };

  const handleConfirmSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    originalHandleConfirmSubmit(event);
  };
  return (
    <ConfirmEmailForm onSubmit={handleConfirmSubmit}>
      <ConfirmationMessage userEmail={userEmailForConfirmation} />

      <ConfirmationCodeInput
        length={6}
        value={confirmationCode}
        onChange={handleCodeChange}
        error={!!errors.confirmationCode}
        errorMessage={errors.confirmationCode?.message}
      />

      <ButtonGroupWrapper>
        <ConfirmCodeButton isLoading={isLoading} disabled={isLoading} />

        <ResendCodeButton
          isTimerActive={isTimerActive}
          isLoading={isLoading}
          timeLeft={timeLeft}
          onResendCode={handleResendCode}
        />
      </ButtonGroupWrapper>
    </ConfirmEmailForm>
  );
};
