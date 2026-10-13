import { useApp } from '@/contexts';
import { getSpan } from '@/utils/services/getSpan';

import { StyledGridItem } from './style';
import type { IGridItem } from './types';

export const GridItem = ({
  align,
  children,
  cols,
  justify,
  rows,
  zIndex,
  spacing,
  direction,
}: IGridItem) => {
  const { isScreenXxs, isScreenXs, isScreenSm, isScreenMd, isScreenLg, isScreenXl, isScreenXl2 } =
    useApp();

  const screens = {
    isScreenLg,
    isScreenMd,
    isScreenSm,
    isScreenXl,
    isScreenXl2,
    isScreenXs,
    isScreenXxs,
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
