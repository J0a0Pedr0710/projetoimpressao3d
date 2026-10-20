import type { ISizesKeys } from 'theme';

import type { IGridScreens } from '@/features/shared/atoms/gridContainerAtom/types';
import type { IElement } from '@/types/props';

export type IGridItemSpan = {
  base?: number;
  xxs?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xl2?: number;
};

export type IGridItem = IElement & {
  cols?: IGridItemSpan;
  rows?: IGridItemSpan;
  align?: 'center' | 'start' | 'end';
  justify?: 'center' | 'start' | 'end' | 'space-between';
  spacing?: ISizesKeys;
  zIndex?: number;
  direction?: 'row' | 'column';
  screens?: IGridScreens;
};

export type IStyleGridItem = {
  $cols: number;
  $rows: number;
  $align: 'center' | 'start' | 'end';
  $justify: 'center' | 'start' | 'end' | 'space-between';
  $zIndex: number;
  $spacing: ISizesKeys;
  $direction: 'row' | 'column';
};
