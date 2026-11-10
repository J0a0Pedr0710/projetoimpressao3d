import type { ReactNode } from 'react';

import type { IIconKeys } from '@/features/shared/atoms/icons/types';

export type IProfileSummarySectionProps = {
  actionLabel: string;
  children: ReactNode;
  icon: IIconKeys;
  onAction: () => void;
  title: string;
};
