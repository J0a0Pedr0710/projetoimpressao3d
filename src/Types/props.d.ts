import type { ReactNode } from 'react';

import type { ETypeDocuments } from '@/types/enum';

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

  type IAddShippingToCartOrigin = {
    name: string;
    email: string;
    document: {
      typeDocument: string;
      valueDocument: string;
    };
    phone: string;
    cep: string;
    state: string;
    city: string;
    neighborhood?: string;
    street: string;
    number: string;
    complement?: string;
    country: string;
  };

  type IAddShippingToCartDestiny = {
    name: string;
    email: string;
    document: {
      typeDocument: string;
      valueDocument: string;
    };
    phone: string;
    cep: string;
    state: string;
    city: string;
    neighborhood?: string;
    street: string;
    number: string;
    complement?: string;
    country: string;
  };

  type IAddShippingToCartBroker = IAddShippingToCartOrigin & {
    companyName?: string;
    codePhone: string;
  };

  type IAddShippingToCartInformationPost = {
    shippingId: string;
    shippingName: string;
    modality: string;
    cepOrigin: string;
    cepDestiny: string;
    countryOrigin: string;
    countryDestiny: string;
    reverseLogistic: boolean;
    residential: boolean;
    ar: boolean;
    ownHands: boolean;
  };

  type IAddShippingToCartBody = {
    type: string;
    origin: IAddShippingToCartOrigin;
    destiny: IAddShippingToCartDestiny;
    broker?: IAddShippingToCartBroker;
    informationPost: IAddShippingToCartInformationPost;
    cacheKey: string;
    acceptedTerms: boolean;
    deletedFileKeys?: string[];
  };

  type IAddShippingToCart = {
    body: IAddShippingToCartBody;
    files: File[];
  };

  type ICalculatorPackageRequest = {
    countryOrigin: string;
    countryDestiny: string;
    zipCodeOrigin: string | null;
    zipCodeDestiny: string | null;
    reverseLogistic: boolean;
    ar: boolean;
    ownHands: boolean;
    residential: boolean;
  };

  type ICartItemsInputModel = {
    _id: string;
    type: string;
  };

  type ICouponResponse = {
    discount: number;
  };

  type IGenerateQuotationDocumentRequest = {
    countryOrigin: string | null;
    countryDestiny: string | null;
    zipCodeOrigin: string | null;
    zipCodeDestiny: string | null;
    packages: {
      packageName: string;
      length: number;
      width: number;
      height: number;
      weight: number;
      valueSafe: number;
    }[];
  };

  type IDocuments = {
    typeDocument: ETypeDocuments;
    valueDocument: string;
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

  type IFreight = {
    carrier: string;
    modality: string;
    deadline: string;
    economy: string;
    freightPrice?: string;
    price: string;
    modalityId: string;
    disabled: boolean;
  };

  type IPackageCalculator = {
    zipCodeDestiny: string | null;
    zipCodeOrigin: string | null;
    countryDestiny: string | null;
    countryOrigin: string | null;
    totalLength: number;
    totalWidth: number;
    totalHeight: number;
    totalWeight: number;
    totalSafeValue: number;
    packages: IPackage[];
    minorFreightRateId: string | null;
  };

  type IPackage = {
    name: string;
    length: number;
    width: number;
    height: number;
    weight: number;
    safeValue?: number;
    nfKey: string;
    nfNumber: string;
    status: 'toDo' | 'inProgress' | 'done' | 'error';
    itens: IPackageFormItem[];
    itensFiles: IFile[];
  };
}
