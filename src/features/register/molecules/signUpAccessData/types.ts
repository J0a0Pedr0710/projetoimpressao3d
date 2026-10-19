import type { ISignUp } from 'props';
import type { Control, FieldErrors, UseFormClearErrors, UseFormWatch } from 'react-hook-form';

export type ISignUpAccessData = {
  control: Control<ISignUp>;
  errors: FieldErrors<ISignUp>;
  watch: UseFormWatch<ISignUp>;
  clearErrors: UseFormClearErrors<ISignUp>;
  showPassword?: boolean;
  showConfirmPassword?: boolean;
  onClickAdornment?: () => void;
  onClickConfirmAdornment?: () => void;
};
