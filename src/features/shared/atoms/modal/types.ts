import type { ReactNode } from 'react';

export type IModal = {
  isOpen: boolean;
  isFullHeight?: boolean;
  onClose: () => void;
  children: ReactNode;
  isOverlayDisabled?: boolean;
};
