import { GridContainerAtom } from '@/features/shared/atoms/gridContainerAtom';
import type { IGrid } from '@/features/shared/atoms/gridContainerAtom/types';
import { useScreenBreakpoints } from '@/features/shared/hooks/useScreenBreakpoints';

type IResponsiveGridContainer = Omit<IGrid, 'screens'>;

export const GridContainer = ({ children, ...props }: IResponsiveGridContainer) => {
  const screens = useScreenBreakpoints();

  return (
    <GridContainerAtom {...props} screens={screens}>
      {children}
    </GridContainerAtom>
  );
};
