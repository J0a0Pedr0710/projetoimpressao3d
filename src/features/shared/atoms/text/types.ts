import type { ComponentProps, ReactNode } from 'react';

import type { DefaultTheme } from 'styled-components';
import type { IColorsKeys, ISizesKeys } from 'theme';

export type IText = ComponentProps<'span'> & {
  children: ReactNode;
  textColor?: IColorsKeys;
  isBold?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  textAlign?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
  textDecoration?:
    | 'wavy'
    | 'underline'
    | 'solid'
    | 'overline'
    | 'none'
    | 'line-through'
    | 'double'
    | 'dotted'
    | 'dashed';
  display?: 'flex' | 'inline';
  isLoading?: boolean;
  isItalic?: boolean;
  allowContextSkeleton?: boolean;
  skeletonWidth?: ISizesKeys;
  isLight?: boolean;
};

export type IStyleText = {
  $textColor: IColorsKeys;
  $isBold: boolean;
  $size: 'lg' | 'md' | 'sm' | 'xs';
  $textAlign: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
  $textDecoration:
    | 'wavy'
    | 'underline'
    | 'solid'
    | 'overline'
    | 'none'
    | 'line-through'
    | 'double'
    | 'dotted'
    | 'dashed';
  $display?: 'flex' | 'inline';
  $isLoading?: boolean;
  $skeletonWidth?: ISizesKeys;
  $isLight?: boolean;
  $isItalic: boolean;
};

export type TextStyleProps = IStyleText & {
  theme: DefaultTheme;
};
