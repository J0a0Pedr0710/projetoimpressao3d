import type { ISideBarOptions } from '@/types/props';

export type ISidebarButton = {
  option: ISideBarOptions;
};

export type IStyleSidebarButton = {
  $isOpen: boolean;
  $isActive: boolean;
};
