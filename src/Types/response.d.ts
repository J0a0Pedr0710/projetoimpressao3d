import type { ICartItem } from 'models';
import type { IFreight, IPackageCalculator } from 'props';

declare module 'response' {
  type ISigninResponse = {
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
    ibgeCode?: string | null;
  };

  type ICalculatorResponse = {
    allFreight: IFreight[];
    alerts: string[];
    packageInfo: IPackageCalculator;
    locationOrigin: ICepResponse;
    locationDestiny: ICepResponse;
    cacheKey: string;
  };

  type ICartItemResponse = {
    cart: ICartItem[];
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

  type IForgotPasswordResponse = {
    success: boolean;
    email: string;
  };

  type IUpdatePasswordResponse = {
    success: boolean;
    message: string;
  };
}
