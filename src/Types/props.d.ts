import type { ReactNode } from "react";

declare module 'props' {
  
  type ISignin = {
    email: string;
    password: string;
  };

  type IElement = {
      children: ReactNode;
    };

    type INotifyDepartureProps = {
      modalMessage: string;
      to: string;
    };

    type IMainTemplateRouteHandle = {
      pages?: { to: string; name: string }[];
      actualPage?: string;
      hideBreadCrumb?: boolean;
      allowContextLoading?: boolean;
      mobileUserSectionIsVisible?: boolean;
    };

    type ISideBarOptions = {
      icon: IIconKeys;
      name: string;
      activeIcon: IIconKeys;
      to: string;
      enableTypes: string[];
    };
  
}