import type { ComponentProps, ReactNode } from 'react';

import type { DefaultTheme } from 'styled-components';
import type { IColorsKeys, ISizesKeys } from 'theme';

export type ITruncate = ComponentProps<'span'> & {
  children: ReactNode;
  textColor?: IColorsKeys;
  isBold?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  width?: ISizesKeys;
  isLoading?: boolean;
};

export type IStyleTruncate = {
  $textColor: IColorsKeys;
  $isBold: boolean;
  $size: 'lg' | 'md' | 'sm' | 'xs';
  $width: ISizesKeys;
  $isLoading?: boolean;
};

export type TruncateStyleProps = IStyleTruncate & {
  theme: DefaultTheme;
};
