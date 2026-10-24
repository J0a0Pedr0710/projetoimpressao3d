import { getSpace } from '@/utils/services/getSpace';

import { StyledGrid } from './style';
import type { IGrid } from './types';

export const GridContainerAtom = ({ size, spacing, children, screens }: IGrid) => {
  const space = getSpace({
    isScreenLg: screens?.isScreenLg ?? false,
    isScreenMd: screens?.isScreenMd ?? false,
    isScreenSm: screens?.isScreenSm ?? false,
    isScreenXl: screens?.isScreenXl ?? false,
    isScreenXl2: screens?.isScreenXl2 ?? false,
    isScreenXs: screens?.isScreenXs ?? false,
    isScreenXxs: screens?.isScreenXxs ?? false,
    spacing,
  });

  return (
    <StyledGrid $size={size || 12} $spacing={space}>
      {children}
    </StyledGrid>
  );
};
