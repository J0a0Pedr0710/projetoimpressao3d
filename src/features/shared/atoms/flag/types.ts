import type { ISizesKeys } from 'theme';

import type { IIconKeys } from '@/features/shared/atoms/icons/types';

export type IFlagStyle = {
  size: ISizesKeys;
  icon: IIconKeys;
};

export type IFlagStyleComponent = {
  $size: ISizesKeys;
};
