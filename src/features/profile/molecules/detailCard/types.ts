import type { IElement } from 'props';

import type { IIconKeys } from '@/features/shared/atoms/icons/types';

export type IDetailCard = IElement & {
  title: string;
  icon?: IIconKeys;
  noPadding?: boolean;
  isLoading?: boolean;
};

export type IDetailCardWrapperProps = {
  $noPadding: boolean;
};
