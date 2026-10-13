import type { JSX, ReactNode } from 'react';

export type IMenu = {
  button: JSX.Element;
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  direction?: 'top' | 'right' | 'left' | 'bottom';
  hidden?: boolean;
  onOpen?: (isOpen: boolean) => void;
};
