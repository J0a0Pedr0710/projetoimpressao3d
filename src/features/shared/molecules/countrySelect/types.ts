import type { SingleValue } from 'react-select';
import type { ISizesKeys } from 'theme';

import type { ISelectOption } from '@/features/shared/molecules/select/types';

export type ICountrySelect = {
  onChange: (option: SingleValue<ISelectOption>) => void;
  value: string | number;
  width?: ISizesKeys;
  message?: string;
  label?: string;
  placeholder?: string;
  placement?: 'auto' | 'top' | 'bottom';
  id?: string;
  disabled?: boolean;
};
