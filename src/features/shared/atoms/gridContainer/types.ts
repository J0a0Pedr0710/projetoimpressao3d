import type { IElement } from 'props';
import type { ISizesKeys } from 'theme';

export type IGrid = IElement & {
  size?: number;
  spacing?: IGridSpace;
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
