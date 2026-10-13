import type { JSX, ReactNode } from 'react';

import type { IColorsKeys, ISizesKeys } from 'theme';

export type ITooltipPlace =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type ITooltip = {
  children: ReactNode;
  render: JSX.Element;
  clickable?: boolean;
  color?: IColorsKeys;
  id?: string;
  disable?: boolean;
  size?: ISizesKeys;
  place?: ITooltipPlace;
  truncate?: boolean;
};
