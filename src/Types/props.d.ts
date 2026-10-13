import type { ReactNode } from 'react';

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

  type ICountries = {
    name: string;
    short: string;
    ddi: string;
    cepLength?: number;
    mask?: string;
    phoneMask?: (phone: string) => string;
    flag: string;
    dateFormat?: (props: IFormatDate) => string;
    countryCode?: string;
  };

  type IWalletAccordionChipProps = {
    chip?: {
      backgroundColor: IColorsKeys;
      borderColor: IColorsKeys;
      color: IColorsKeys;
      message: string;
    };
    borderColor?: string;
    backgroundColor?: string;
    iconColor?: IColorsKeys;
  };

  type IWalletMenuTransactions = {
    date: string;
    transactions: IWalletButtonBase[];
  };

  type IWalletTransactions = {
    date: string;
    transactions: (IWalletPostageAccordion | IWalletCreditAccordion)[];
  };

  type IPix = {
    amount: number;
    codeUrl: string;
    code: string;
  };

  type IBuyerDetails = {
    buyer: string;
    document: string;
    typeDocument: ETypeDocuments;
    ddi: string;
    phone?: string;
    email: string;
  };

  type IBill = {
    barcodeUrl: string;
    pdfUrl: string;
    barcode: string;
    expDate: Date;
  };

  type IBuyerDetailsAddress = {
    country: string;
    state: string;
    shortState: string;
    city: string;
    zipCode: string;
    complement: string;
    number: string;
    street: string;
    neighborhood: string;
  };

  type IWalletInput = {
    value: string;
  };
}
