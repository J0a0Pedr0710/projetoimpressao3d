import { useState } from 'react';

import { useUpdatePassword } from '@/features/register/hooks/useForgotPassword';
import { RecoverPasswordActions } from '@/features/register/molecules/recoverPasswordButtons';
import { RecoverPasswordInput } from '@/features/register/molecules/recoverPasswordInput';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { PasswordRulesDisplay } from '@/features/shared/molecules/passwordRulesDisplay';

import { RecoverPasswordContainer } from './style';

export const RecoverPasswordForm = () => {
  const { control, errors, watch, onSubmit } = useUpdatePassword();

  const passwordValue = watch('newPassword');
  const confirmPasswordValue = watch('confirmPassword');
  const [isRepeatPasswordFocused, setIsRepeatPasswordFocused] = useState(false);

  return (
    <RecoverPasswordContainer onSubmit={onSubmit}>
      <RecoverPasswordInput
        control={control}
        errors={errors}
        isConfirmFocused={isRepeatPasswordFocused}
        onConfirmFocus={() => setIsRepeatPasswordFocused(true)}
        onConfirmBlur={() => setIsRepeatPasswordFocused(false)}
      />

      <GridItem cols={{ base: 12 }}>
        <PasswordRulesDisplay
          password={confirmPasswordValue}
          comparePassword={passwordValue}
          isFocused={isRepeatPasswordFocused}
        />
      </GridItem>

      <RecoverPasswordActions />
    </RecoverPasswordContainer>
  );
};
