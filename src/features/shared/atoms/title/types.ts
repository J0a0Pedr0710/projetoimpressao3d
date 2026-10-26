import type { ComponentProps, ReactNode } from 'react';

import type { DefaultTheme } from 'styled-components';
import type { IColorsKeys, ISizesKeys } from 'theme';

export type ITitle = ComponentProps<'span'> & {
  children: ReactNode;
  textColor?: IColorsKeys;
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md';
  isBold?: boolean;
  textAlign?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
  width?: ISizesKeys;
  isLoading?: boolean;
  skeletonWidth?: ISizesKeys;
};

export type IStyleTitle = {
  $textColor: IColorsKeys;
  $size: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md';
  $isBold: boolean;
  $textAlign: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
  $width?: ISizesKeys;
  $isLoading?: boolean;
  $skeletonWidth?: ISizesKeys;
};

export type TitleStyleProps = IStyleTitle & {
  theme: DefaultTheme;
};
