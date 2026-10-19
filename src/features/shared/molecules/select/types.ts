import type { JSX } from 'react';

import type { SingleValue } from 'react-select';
import type { ISizesKeys } from 'theme';

export type ISelectOption = {
  label: string | number | JSX.Element;
  value: string | number;
};

export type ISelect = {
  defaultValue?: string | number;
  options: ISelectOption[];
  onChange?: (value: SingleValue<ISelectOption>) => void;
  width?: ISizesKeys;
  value?: string | number;
  placeholder?: string;
  isRequired?: boolean;
  label?: string;
  helperText?: string;
  message?: string;
  filterOption?: (option: ISelectOption, inputValue: string) => boolean;
  placement?: 'auto' | 'top' | 'bottom';
  disabled?: boolean;
  id?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  allowContextSkeleton?: boolean;
  useMenuPortal?: boolean;
};

export type IStyleSelectContainer = {
  $width: ISizesKeys;
};

export type IStyleSelectContent = {
  $isLoading?: boolean;
  $isScreenSm?: boolean;
};
