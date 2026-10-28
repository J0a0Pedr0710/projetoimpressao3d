import { messages } from '@/assets/messages';
import type { ISideBarOptions } from '@/types/props';

const { myOrders } = messages.texts;

export const defaultSidebarOptions: ISideBarOptions[] = [
  {
    icon: 'info',
    activeIcon: 'myOrders',
    name: myOrders,
    to: '/my-Orders',
    enableTypes: ['USER'],
    showOnPath: '/profile',
  },
];
