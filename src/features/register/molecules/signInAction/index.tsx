import { useState } from 'react';

import { messages } from '@/assets/messages';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';

import type { ISignInAction } from './types';

export const SignInAction = ({ control, errors }: ISignInAction) => {
  const [showPassword, setShowPassword] = useState(false);
  const { mail, password } = messages.label;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const endAdornmentIcon = showPassword ? 'hiddenEye' : 'eye';
  const endAdornment = <Icon icon={endAdornmentIcon} size={6} color={'info'} />;

  return (
    <>
      <Title className="accessTitle" size={'xl'} isBold>
        {messages.texts.accessProject3DAccount}
      </Title>
      <ControlInput
        control={control}
        name="email"
        label={mail}
        errorMessage={errors.email?.message}
        type="email"
        isRequired
        isFullWidth
      />
      <ControlInput
        control={control}
        name="password"
        label={password}
        errorMessage={errors.password?.message}
        type={showPassword ? 'text' : 'password'}
        isRequired
        isFullWidth
        endadornment={endAdornment}
        onClickEndadornment={togglePasswordVisibility}
        hasBorderAdornment={false}
      />
    </>
  );
};
