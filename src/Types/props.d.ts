import type { ReactNode } from 'react';

import type { ETypeDocuments } from '@/types/enum';

declare module 'props' {
  type ISignIn = {
    email: string;
    password: string;
  };

  type ISignUp = {
    acceptTerms: boolean;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
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

  type ICartItemsInputModel = {
    _id: string;
    type: string;
  };

  type IAddProductToCart = {
    productId: string;
    quantity: number;
  };

  type ICreateOrderAddress = {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };

  type ICouponResponse = {
    discount: number;
  };

  type IDocuments = {
    typeDocument: ETypeDocuments | null;
    valueDocument: string | null;
  };

  type IPaymentBuyerDetailsInputModel = {
    address: {
      zipCode: string;
      city: string;
      state: string;
      shortState: string;
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      country: string;
    };
    email: string;
    telephone: string;
    fullName: string;
    ddi: string;
    documents: IDocuments[];
  };

  type IPaymentInputModel = {
    type: string;
    card?: {
      id: string;
      created_at: Date;
      expires_at: Date;
      card: {
        first_six_digits: string;
        last_four_digits: string;
        holder_name: string;
        holder_document: string;
        exp_month: number;
        exp_year: number;
        brand: string;
        label: string;
      };
    };
  };

  type IUseForgotPassword = {
    email: string;
  };

  type IUseUpdatePassword = {
    email: string;
    confirmCode: string;
    newPassword: string;
  };

  type IRecoerPassword = {
    newPassword: string;
    confirmNewPassword: string;
  };

  type IConfirmAccountPayload = {
    email: string;
    code: string;
  };

  type IRecoverPassword = {
    newPassword: string;
    confirmPassword: string;
  };

  type IProfileDataInputModel = {
    firstName: string;
    lastName: string;
    email: string;
    ddi?: string;
    telephone?: string;
    birth_date?: string | Date;
    imgProfile?: string;
    confirm_account?: boolean;
    active?: string;
    address?: {
      cep?: string;
      city?: string;
      state?: string;
      street?: string;
      number?: string;
      complement?: string | null;
      neighborhood?: string;
      country: string;
      short_state?: string;
    };
    documents: IDocuments[];
  };

  type IProfilePersonalDataInputModel = Pick<
    IProfileDataInputModel,
    'firstName' | 'lastName' | 'email' | 'documents'
  >;

  type IProfileAddressDataInputModel = {
    telephone: string;
    address: {
      cep: string;
      city: string;
      state: string;
      street: string;
      number: string;
      complement: string;
      neighborhood: string;
      country: string;
    };
  };

  type IColorPickerMenuProps = {
    color: string;
    setColor: (color: string) => void;
    onSetColors: (color: string, color2: string) => void;
  };

  type IDocumentsOptions = {
    label: string;
    value: ETypeDocuments;
  };
}
