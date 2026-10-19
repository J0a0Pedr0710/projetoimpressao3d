import type { IColorsKeys } from 'theme';

export type ICheckbox = {
  id?: string;
  name?: string;
  isChecked?: boolean;
  onCheck?: (value: boolean) => void;
  label?: string;
  color?: IColorsKeys;
  disabled?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
};

export type IStyleCheckbox = {
  $isChecked: boolean;
  $color: IColorsKeys;
  $error?: boolean;
  $isLoading?: boolean;
  disabled?: boolean;
};

export type IStyleContainer = {
  $error: boolean;
  disabled: boolean;
};
