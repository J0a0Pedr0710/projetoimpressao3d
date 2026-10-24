import { useState } from 'react';

import { messages } from '@/assets/messages';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Icon } from '@/features/shared/atoms/icons';
import { Title } from '@/features/shared/atoms/title';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { PasswordRulesDisplay } from '@/features/shared/molecules/passwordRulesDisplay';

import type { ISignUpAccessData } from './types';

export const SignUpAccessData = ({
  control,
  errors,
  watch,
  clearErrors,
  showPassword = false,
  showConfirmPassword = false,
  onClickAdornment,
  onClickConfirmAdornment,
}: ISignUpAccessData) => {
  const { accessData } = messages.titles;
  const { mail, password, repeatPassword } = messages.label;

  const [isRepeatPasswordFocused, setIsRepeatPasswordFocused] = useState(false);

  const showPasswordAdornament = showPassword ? (
    <Icon icon={'hiddenEye'} size={6} color={'info'} />
  ) : (
    <Icon icon={'eye'} size={6} color={'info'} />
  );

  const confirmPasswordAdornament = showConfirmPassword ? (
    <Icon icon={'hiddenEye'} size={6} color={'info'} />
  ) : (
    <Icon icon={'eye'} size={6} color={'info'} />
  );

  const passwordValue = watch('password');
  const repeatPasswordValue = watch('repeatPassword');

  return (
    <>
      <GridItem cols={{ base: 12 }}>
        <Title size={'xl'} isBold>
          {accessData}
        </Title>
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          errorMessage={errors?.email?.message}
          name="email"
          isFullWidth
          control={control}
          label={mail}
          type="email"
          isRequired
        />
      </GridItem>
      <GridItem cols={{ base: 12 }}>
        <ControlInput
          isFullWidth
          errorMessage={errors?.password?.message}
          control={control}
          name="password"
          label={password}
          type={showPassword ? 'text' : 'password'}
          isRequired
          endadornment={showPasswordAdornament}
          onClickEndadornment={onClickAdornment}
          hasBorderAdornment={false}
        />
      </GridItem>

      <GridItem cols={{ base: 12 }}>
        <ControlInput
          control={control}
          isFullWidth
          name="repeatPassword"
          label={repeatPassword}
          type={showConfirmPassword ? 'text' : 'password'}
          isRequired
          errorMessage={!isRepeatPasswordFocused ? errors?.repeatPassword?.message : undefined}
          endadornment={confirmPasswordAdornament}
          onClickEndadornment={onClickConfirmAdornment}
          hasBorderAdornment={false}
          onFocus={() => {
            setIsRepeatPasswordFocused(true);
            clearErrors('repeatPassword');
          }}
          onBlur={() => {
            setIsRepeatPasswordFocused(false);
          }}
        />
      </GridItem>

      <GridItem cols={{ base: 12 }}>
        <PasswordRulesDisplay
          password={repeatPasswordValue}
          comparePassword={passwordValue}
          isFocused={isRepeatPasswordFocused}
        />
      </GridItem>
    </>
  );
};
