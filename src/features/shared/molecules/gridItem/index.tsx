import { GridItemAtom } from '@/features/shared/atoms/gridItemAtom';
import type { IGridItem } from '@/features/shared/atoms/gridItemAtom/types';
import { useScreenBreakpoints } from '@/features/shared/hooks/useScreenBreakpoints';

type IResponsiveGridItem = Omit<IGridItem, 'screens'>;

export const GridItem = ({ children, ...props }: IResponsiveGridItem) => {
  const screens = useScreenBreakpoints();

  return (
    <GridItemAtom {...props} screens={screens}>
      {children}
    </GridItemAtom>
  );
};
