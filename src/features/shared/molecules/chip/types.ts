import type { ReactNode } from 'react';

import type { DefaultTheme } from 'styled-components';
import type { IColorsKeys, ISizesKeys } from 'theme';

export type IChip = {
  backgroundColor?: IColorsKeys;
  borderColor?: IColorsKeys;
  color?: IColorsKeys;
  isAttached?: boolean;
  children: ReactNode;
  size?: ISizesKeys;
};

export type IStyleChip = {
  $backgroundColor: IColorsKeys;
  $borderColor: IColorsKeys;
  $isAttached: boolean;
  $size: ISizesKeys;
};

export type IGetBottomBorderRadius = IStyleChip & {
  theme: DefaultTheme;
};
