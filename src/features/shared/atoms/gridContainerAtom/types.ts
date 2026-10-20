import type { ISizesKeys } from 'theme';

import type { IElement } from '@/types/props';

export type IGridScreens = {
  isScreenXxs: boolean;
  isScreenXs: boolean;
  isScreenSm: boolean;
  isScreenMd: boolean;
  isScreenLg: boolean;
  isScreenXl: boolean;
  isScreenXl2: boolean;
};

export type IGrid = IElement & {
  size?: number;
  spacing?: IGridSpace;
  screens?: IGridScreens;
};

export type IStyleGrid = {
  $size: number;
  $spacing: ISizesKeys;
};

export type IGridSpace = {
  base?: ISizesKeys;
  xxs?: ISizesKeys;
  xs?: ISizesKeys;
  sm?: ISizesKeys;
  md?: ISizesKeys;
  lg?: ISizesKeys;
  xl?: ISizesKeys;
  xl2?: ISizesKeys;
};
