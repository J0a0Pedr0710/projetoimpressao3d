import type { Control, FieldErrors } from 'react-hook-form';

import type { ISignUp } from '@/types/props';

export type ISignUpPersonalData = {
  control: Control<ISignUp>;
  errors: FieldErrors<ISignUp>;
};
