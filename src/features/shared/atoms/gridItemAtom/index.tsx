import { getSpan } from '@/utils/services/getSpan';

import { StyledGridItem } from './style';
import type { IGridItem } from './types';

export const GridItemAtom = ({
  align,
  children,
  cols,
  justify,
  rows,
  zIndex,
  spacing,
  direction,
  screens: screenBreakpoints,
}: IGridItem) => {
  const screens = {
    isScreenLg: screenBreakpoints?.isScreenLg ?? false,
    isScreenMd: screenBreakpoints?.isScreenMd ?? false,
    isScreenSm: screenBreakpoints?.isScreenSm ?? false,
    isScreenXl: screenBreakpoints?.isScreenXl ?? false,
    isScreenXl2: screenBreakpoints?.isScreenXl2 ?? false,
    isScreenXs: screenBreakpoints?.isScreenXs ?? false,
    isScreenXxs: screenBreakpoints?.isScreenXxs ?? false,
  };

  const colsSpan = getSpan({
    ...screens,
    span: cols,
  });

  const rowsSpan = getSpan({
    ...screens,
    span: rows,
  });

  if (colsSpan === 0) {
    return <></>;
  }

  return (
    <StyledGridItem
      $align={align || 'start'}
      $justify={justify || 'start'}
      $cols={colsSpan}
      $rows={rowsSpan}
      $spacing={spacing || 0}
      $zIndex={zIndex || 0}
      $direction={direction || 'row'}
    >
      {children}
    </StyledGridItem>
  );
};
