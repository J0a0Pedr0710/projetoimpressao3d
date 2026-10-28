import type { IColorsKeys } from 'theme';

import type { IIconKeys } from '@/features/shared/atoms/icons/types';

export type IOptionsCard = {
  title: string;
  icon: IIconKeys;
  color: IColorsKeys;
  onClick?: () => void;
};
