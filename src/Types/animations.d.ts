import type { ReactNode } from 'react';

declare module 'animations' {
  type IGrow = {
    isVisible: boolean;
    children: ReactNode;
    disabled?: boolean;
  };

  type IGrowStyle = {
    $isClosing: boolean;
    $disabled: boolean;
  };
}