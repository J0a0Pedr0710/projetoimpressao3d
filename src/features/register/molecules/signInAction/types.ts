import type { ISignIn } from 'props';
import type { Control, FieldErrors } from 'react-hook-form';

export type ISignInAction = {
  control: Control<ISignIn>;
  errors: FieldErrors<ISignIn>;
};
