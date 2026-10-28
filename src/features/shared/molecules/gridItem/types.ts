import type { IGridItem } from "@/features/shared/atoms/gridItemAtom/types";

export type IResponsiveGridItem = Omit<IGridItem, 'screens'>;
