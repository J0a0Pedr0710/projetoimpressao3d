import type { ComponentProps } from 'react';

import type { DefaultTheme } from 'styled-components';

export type IButton = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  isFullWidth?: boolean;
  isLoading?: boolean;
  isSkeleton?: boolean;
  cursor?: 'pointer' | 'not-allowed' | 'default';
};

export type StyleButtonProps = ComponentProps<'button'> & {
  $variant: 'primary' | 'secondary' | 'tertiary';
  $isFullWidth: boolean;
  $isLoading?: boolean;
};

export type StyleProps = {
  theme: DefaultTheme;
  $variant: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
};
