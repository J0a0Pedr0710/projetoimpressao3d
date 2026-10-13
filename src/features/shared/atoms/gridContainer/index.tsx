import { useApp } from '@/contexts';
import { getSpace } from '@/utils/services/getSpace';

import { StyledGrid } from './style';
import type { IGrid } from './types';

export const GridContainer = ({ size, spacing, children }: IGrid) => {
  const { isScreenXxs, isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXl2 } =
    useApp();

  const space = getSpace({
    isScreenLg,
    isScreenMd,
    isScreenSm,
    isScreenXl,
    isScreenXl2,
    isScreenXs,
    isScreenXxs,
    spacing,
  });

  return (
    <StyledGrid $size={size || 12} $spacing={space}>
      {children}
    </StyledGrid>
  );
};
