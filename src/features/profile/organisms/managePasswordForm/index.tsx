import { useState } from 'react';

import { messages } from '@/assets/messages';
import { useManagePassword } from '@/features/profile/hooks/useManagePassword';
import { Button } from '@/features/shared/atoms/button';
import { GridContainer } from '@/features/shared/molecules/gridContainer';
import { GridItem } from '@/features/shared/molecules/gridItem';
import { Icon } from '@/features/shared/atoms/icons';
import { ControlInput } from '@/features/shared/molecules/controlInput';
import { PasswordRulesDisplay } from '@/features/shared/molecules/passwordRulesDisplay';

export const ManagePasswordForm = () => {
  const { save } = messages.texts;
  const { repeatPassword, newPasswordLabel, oldPassword } = messages.label;

  const {
    control,
    onSubmit,
    showPassword,
    onClickEndadornment,
    errors,
    showConfirmPassword,
    onClickConfirmAdornment,
    showOldPassword,
    onClickOldPassword,
    watch,
  } = useManagePassword();

  const [isRepeatPasswordFocused, setIsRepeatPasswordFocused] = useState(false);

  const passwordValue = watch('newPassword');
  const confirmPasswordValue = watch('confirmPassword');

  const renderPasswordAdornment = (isVisible: boolean) => (
    <Icon icon={isVisible ? 'hiddenEye' : 'eye'} size={6} color="info" />
  );

  return (
    <form onSubmit={onSubmit}>
      <GridContainer size={12} spacing={{ base: 3 }}>
        <GridItem cols={{ base: 12, sm: 6 }}>
          <ControlInput
            control={control}
            name="oldPassword"
            label={oldPassword}
            isRequired
            isFullWidth
            type={showOldPassword ? 'text' : 'password'}
            endadornment={renderPasswordAdornment(showOldPassword)}
            onClickEndadornment={onClickOldPassword}
            hasBorderAdornment={false}
            errorMessage={errors.oldPassword?.message}
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 6 }}>
          <ControlInput
            control={control}
            name="newPassword"
            label={newPasswordLabel}
            isRequired
            isFullWidth
            type={showPassword ? 'text' : 'password'}
            endadornment={renderPasswordAdornment(showPassword)}
            onClickEndadornment={onClickEndadornment}
            hasBorderAdornment={false}
            errorMessage={errors.newPassword?.message}
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 6 }}>
          <ControlInput
            control={control}
            name="confirmPassword"
            label={repeatPassword}
            isRequired
            isFullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            endadornment={renderPasswordAdornment(showConfirmPassword)}
            onClickEndadornment={onClickConfirmAdornment}
            hasBorderAdornment={false}
            errorMessage={!isRepeatPasswordFocused ? errors?.confirmPassword?.message : undefined}
            onFocus={() => {
              setIsRepeatPasswordFocused(true);
            }}
            onBlur={() => {
              setIsRepeatPasswordFocused(false);
            }}
          />
        </GridItem>

        <GridItem cols={{ base: 12 }}>
          <PasswordRulesDisplay
            password={confirmPasswordValue}
            comparePassword={passwordValue}
            isFocused={isRepeatPasswordFocused}
          />
        </GridItem>

        <GridItem cols={{ base: 12, sm: 6 }}>
          <Button type="submit" isFullWidth>
            {save}
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
