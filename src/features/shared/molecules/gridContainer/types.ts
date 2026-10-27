import type { IGrid } from "@/features/shared/atoms/gridContainerAtom/types";

export type IResponsiveGridContainer = Omit<IGrid, 'screens'>;
