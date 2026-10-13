import type { IMainTemplateRouteHandle } from 'props';

import { messages } from '@/assets/messages';

const { home, paymentCart } = messages.titles;

export const homePage = { name: home, to: '/home' };

export const cartRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage],
  actualPage: paymentCart,
  mobileUserSectionIsVisible: false,
};
