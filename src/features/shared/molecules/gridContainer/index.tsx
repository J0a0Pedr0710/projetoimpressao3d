import { GridContainerAtom } from '@/features/shared/atoms/gridContainerAtom';
import { useScreenBreakpoints } from '@/features/shared/hooks/useScreenBreakpoints';
import type { IResponsiveGridContainer } from '@/features/shared/molecules/gridContainer/types';

export const GridContainer = ({ children, ...props }: IResponsiveGridContainer) => {
  const screens = useScreenBreakpoints();

  return (
    <GridContainerAtom {...props} screens={screens}>
      {children}
    </GridContainerAtom>
  );
};
