import { useState } from 'react';

import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';

import { RecoverTitle } from './style';
import type { IRecoverPasswordInputs } from './types';

export const RecoverPasswordInput = ({
  control,
  errors,
  isConfirmFocused,
  onConfirmFocus,
  onConfirmBlur,
}: IRecoverPasswordInputs) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { newPasswordLabel, repeatPassword } = messages.label;
  const { recoverPassword } = messages.texts;

  const toggleNewPasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const endAdornmentIcon = showPassword ? 'hiddenEye' : 'eye';
  const endAdornment = <Icon icon={endAdornmentIcon} size={6} color={'info'} />;

  const confirmEndAdornmentIcon = showConfirmPassword ? 'hiddenEye' : 'eye';
  const confirmEndAdornment = <Icon icon={confirmEndAdornmentIcon} size={6} color={'info'} />;

  return (
    <>
      <RecoverTitle>
        <Title className="recoverTitle" size={'xl'} isBold>
          {recoverPassword}
        </Title>
      </RecoverTitle>
      <ControlInput
        control={control}
        name="newPassword"
        label={newPasswordLabel}
        type={showPassword ? 'text' : 'password'}
        endadornment={endAdornment}
        onClickEndadornment={toggleNewPasswordVisibility}
        hasBorderAdornment={false}
        errorMessage={errors.newPassword?.message}
        isRequired
        isFullWidth
      />

      <ControlInput
        control={control}
        name="confirmPassword"
        label={repeatPassword}
        type={showConfirmPassword ? 'text' : 'password'}
        endadornment={confirmEndAdornment}
        onClickEndadornment={toggleConfirmPasswordVisibility}
        hasBorderAdornment={false}
        errorMessage={!isConfirmFocused ? errors.confirmPassword?.message : undefined}
        onFocus={onConfirmFocus}
        onBlur={onConfirmBlur}
        isRequired
        isFullWidth
      />
    </>
  );
};
