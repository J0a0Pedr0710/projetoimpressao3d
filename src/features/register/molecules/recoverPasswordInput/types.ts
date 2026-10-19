import type { IRecoverPassword } from 'props';
import type { Control, FieldErrors } from 'react-hook-form';

export type IRecoverPasswordInputs = {
  control: Control<IRecoverPassword>;
  errors: FieldErrors<IRecoverPassword>;
  isConfirmFocused: boolean;
  onConfirmFocus?: () => void;
  onConfirmBlur?: () => void;
};
