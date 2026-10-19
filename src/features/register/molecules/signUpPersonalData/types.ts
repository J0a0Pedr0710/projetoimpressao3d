import type { ISignUp } from 'props';
import type {
  Control,
  FieldErrors,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

import type { ISelectOption } from '@/features/shared/molecules/select/types';
import type { ETypeDocuments } from '@/types/enum';

export type ISignUpPersonalData = {
  control: Control<ISignUp>;
  errors: FieldErrors<ISignUp>;
  watch: UseFormWatch<ISignUp>;
  clearErrors: UseFormClearErrors<ISignUp>;
  setValue: UseFormSetValue<ISignUp>;
  country: string | number;
  typeDocument: ETypeDocuments;
  options: ISelectOption[];
};
