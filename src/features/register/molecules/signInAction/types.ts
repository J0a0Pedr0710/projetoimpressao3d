import type { ISignIn } from '@/types/props';
import type { Control, FieldErrors } from 'react-hook-form';

export type ISignInAction = {
  control: Control<ISignIn>;
  errors: FieldErrors<ISignIn>;
};
