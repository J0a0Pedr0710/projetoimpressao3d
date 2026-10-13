import type { ISideBarOptions } from 'props';

export type ISidebarButton = {
  option: ISideBarOptions;
};

export type IStyleSidebarButton = {
  $isOpen: boolean;
  $isActive: boolean;
};
