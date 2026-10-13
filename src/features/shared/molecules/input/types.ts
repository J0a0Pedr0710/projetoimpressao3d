import type { ComponentProps, FocusEventHandler, JSX } from 'react';

import type { ITooltipPlace } from '@/features/shared/atoms/tooltip/types';

export type IInput = ComponentProps<'input'> & {
  isFullWidth?: boolean;
  isRequired?: boolean;
  label?: string;
  helperText?: string | JSX.Element;
  message?: string;
  mask?: (value: string) => string;
  onClickEndadornment?: () => void;
  status?: 'default' | 'error' | 'success';
  endadornment?: JSX.Element;
  prefix?: string;
  prefixElement?: JSX.Element;
  hasBorderAdornment?: boolean;
  maxCharLength?: number;
  noRefBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  placeholderPosition?: 'start' | 'end';
  tooltipPlacement?: ITooltipPlace;
  shouldShowTooltip?: boolean;
  tooltipHelperText?: string;
  allowContextSkeleton?: boolean;
  isLoading?: boolean;
};

export type IStyleInputContainer = ComponentProps<'input'> & {
  $isFullWidth: boolean;
};

export type IStyleEndAdornmentContent = {
  $hasBorderAdornment?: boolean;
};

export type IStyleInputContent = {
  $disabled?: boolean;
  $isFullWidth: boolean;
  $status: 'default' | 'error' | 'success';
  $isLoading?: boolean;
};

export type IStyleInput = ComponentProps<'input'> & {
  $placeholderPosition?: 'start' | 'end';
};
