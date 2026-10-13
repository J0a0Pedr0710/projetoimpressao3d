import type { IMainTemplateRouteHandle } from 'props';

import { messages } from '@/assets/messages';

const {
  home,
  paymentCart,
 
} = messages.titles;

export const homePage = { name: home, to: '/dashboard' };

export const dashboardRouteHandle: IMainTemplateRouteHandle = {
  hideBreadCrumb: true,
  allowContextLoading: false,
};

export const cartRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage],
  actualPage: paymentCart,
  mobileUserSectionIsVisible: false,
};
