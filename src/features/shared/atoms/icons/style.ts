import type { IColorsKeys, ISizesKeys } from 'theme';

import type { AllIcons } from '@/constants/icons';

export type IIcon = {
  color?: IColorsKeys;
  size?: ISizesKeys;
  icon: IIconKeys;
};

export type IIconKeys = keyof typeof AllIcons;
