import { messages } from '@/assets/messages';
import type { ISideBarOptions } from '@/types/props';

const { myOrders } = messages.texts;

export const defaultSidebarOptions: ISideBarOptions[] = [
  {
    icon: 'orders',
    activeIcon: 'ordersActive',
    name: myOrders,
    to: '/profile/my-orders',
    enableTypes: ['USER'],
    showOnPath: '/profile',
  },
];
