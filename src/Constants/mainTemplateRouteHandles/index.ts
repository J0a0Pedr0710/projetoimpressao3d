import { messages } from '@/assets/messages';
import type { IMainTemplateRouteHandle } from '@/types/props';

const { deliveryAddress, home, paymentCart, personalData, profile, registeredAddresses, billingAddresses } = messages.titles;

export const homePage = { name: home, to: '/' };
const profilePage = { name: profile, to: '/profile' };

export const cartRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage],
  actualPage: paymentCart,
  mobileUserSectionIsVisible: false,
};

export const profileRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage],
  actualPage: profile,
};

export const profileAddressRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage, profilePage],
  actualPage: deliveryAddress,
};

export const profilePersonalDataRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage, profilePage],
  actualPage: personalData,
};

export const profileAddresses: IMainTemplateRouteHandle = {
  pages: [homePage, profilePage],
  actualPage: registeredAddresses,
};

export const billingAddressRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage, profilePage],
  actualPage: billingAddresses,
};

export const billingAddressesRouteHandle: IMainTemplateRouteHandle = {
  pages: [homePage, profilePage],
  actualPage: billingAddresses,
};
