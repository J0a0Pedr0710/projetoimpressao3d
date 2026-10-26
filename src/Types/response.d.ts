import type { ICartItem, INotification, IProductCartItem } from 'models';

import type { ETypeDocuments } from '@/types/enum';
import type { IDocuments } from '@/types/props';

declare module 'response' {
  type ISignInResponse = {
    token: string;
    confirmed?: boolean;
  };

  type IFile = {
    id: string;
    name: string;
    file: File;
    key: string;
    status: 'error' | number;
    type: string;
  };

  type IFormatDate = {
    dateString?: Date | string | null;
    hasHours?: boolean;
  };

  type ICepResponse = {
    zipCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
    neighborhood: string;
    stateAbbreviation: string;
  };

  type ICartItemResponse = {
    cart: ICartItem[];
  };

  type IProductCartResponse = {
    cart: IProductCartItem[];
  };

  type ICreateOrderResponse = {
    order: {
      id: string;
      userId: string;
      shippingAddress: {
        cep: string;
        street: string;
        number: string;
        complement: string | null;
        neighborhood: string;
        city: string;
        state: string;
      };
      items: Array<{
        productId: string;
        quantity: number;
        price: number;
        name: string;
        imgUrl: string | null;
      }>;
      total: number;
      status: 'pending' | 'paid' | 'canceled';
      created_at: string | null;
    };
  };

  type ICheckoutResponse = {
    transactionId: string;
    amount: number;
    expiresAt?: string;
    qrCode?: string;
    qrCodeUrl?: string;
    barcode?: string;
    line?: string;
    url?: string;
    status: string;
    cartUpdated: ICartItem[];
  };

  type IProfileResponse = {
    id?: string;
    _id?: string | { $oid: string };
    firstName: string;
    lastName: string;
    email: string;
    ddi?: string;
    telephone?: string;
    birth_date?: string | null;
    permissions: string[];
    active: boolean;
    created_at: string | { $date: string } | null;
    updated_at: string | { $date: string } | null;
    documents: IDocuments[];
    notifications?: INotification;
    address?: IProfileAddressResponse;
    addresses?: IProfileAddressResponse[];
    imgProfile?: string;
    tokenAPI?: string;
  };

  type IProfileAddressResponse = {
    id?: string;
    _id?: string | { $oid: string };
    cep?: string;
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    country?: string;
    short_state?: string;
    isDefault?: boolean;
  };

  type IForgotPasswordResponse = {
    success: boolean;
    email: string;
  };

  type IUpdatePasswordResponse = {
    success: boolean;
    message: string;
  };

  type ISignUpResponse = {
    created: boolean;
  };

  type IConfirmAccountResponse = {
    confirmed: boolean;
    token: string;
  };

  type IFormatDocumentByType = {
    document: string;
    type: ETypeDocuments;
  };

  type IProfileUpdateResponse = {
    message: string;
  };

  type IProfileUpdateResponse = {
    message: string;
  };

  type ILocationZipCodeResponse = {
    city: string;
    country: string;
    countryAbbreviation: string;
    created_at: string;
    latitude: string;
    longitude: string;
    neighborhood: string;
    state: string;
    stateAbbreviation: string;
    street: string;
    updated_at: string;
    zipCode: string;
    __v: number;
    ibgeCode?: string;
  };
}
