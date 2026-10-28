import { GridItemAtom } from '@/features/shared/atoms/gridItemAtom';
import { useScreenBreakpoints } from '@/features/shared/hooks/useScreenBreakpoints';
import type { IResponsiveGridItem } from '@/features/shared/molecules/gridItem/types';


export const GridItem = ({ children, ...props }: IResponsiveGridItem) => {
  const screens = useScreenBreakpoints();

  return (
    <GridItemAtom {...props} screens={screens}>
      {children}
    </GridItemAtom>
  );
};
