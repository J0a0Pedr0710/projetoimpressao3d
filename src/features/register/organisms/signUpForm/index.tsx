import { useSignUp } from '@/features/register/hooks/useSignUp';
import { SignUpAccessData } from '@/features/register/molecules/signUpAccessData';
import { SignUpButtonsActions } from '@/features/register/molecules/signUpButtonsActions';
import { SignUpPersonalData } from '@/features/register/molecules/signUpPersonalData';
import { SignUpTerms } from '@/features/register/molecules/signUpTerms';
import { GridContainer } from '@/features/shared/molecules/gridContainer';

import { SignUpContainer } from './style';

export const SignUpForm = () => {
  const {
    control,
    onSubmit,
    errors,
    handleBackButton,
    clearErrors,
    onClickAdornment,
    showPassword,
    onClickConfirmAdornment,
    showConfirmPassword,
    watch,
    handleSetIsAccept,
  } = useSignUp();

  const acceptTerms = watch('acceptTerms');

  return (
    <SignUpContainer onSubmit={onSubmit}>
      <GridContainer spacing={{ base: 5 }} size={12}>
        <SignUpPersonalData control={control} errors={errors} />

        <SignUpAccessData
          control={control}
          errors={errors}
          clearErrors={clearErrors}
          watch={watch}
          onClickAdornment={onClickAdornment}
          onClickConfirmAdornment={onClickConfirmAdornment}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
        />

        <SignUpTerms
          isChecked={acceptTerms}
          setIsAccept={handleSetIsAccept}
          errorMessage={errors.acceptTerms?.message}
        />

        <SignUpButtonsActions backButton={handleBackButton} />
      </GridContainer>
    </SignUpContainer>
  );
};
