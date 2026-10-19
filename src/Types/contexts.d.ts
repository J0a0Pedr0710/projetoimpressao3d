import type { Dispatch, ReactNode, SetStateAction } from 'react';

import type { INotification, IProfile, IUser } from 'models';
import type { IWalletMenuTransactions, IWalletTransactions } from 'props';

import type { ETransactionStatus } from './enum';

declare module 'contexts' {
  type IDispatch<T> = Dispatch<SetStateAction<T>>;

  type IProvider = {
    children: ReactNode;
  };

  type IAuthContext = {
    user: IUser;
    setUser: IDispatch<IUser>;
    token: string | undefined;
    setToken: IDispatch<string | undefined>;
    isTokenValid: boolean;
    logout: () => void;
  };

  type IAppContext = {
    loading: boolean;
    setLoading: IDispatch<boolean>;
    layoutMenuOpen: 'notifications' | 'profile' | 'sidebar' | null;
    setLayoutMenuOpen: IDispatch<'notifications' | 'profile' | 'sidebar' | null>;
    openAlert: (message: string, type: 'success' | 'error' | 'warning' | 'info' | 'link') => void;
    isScreenXxs: boolean;
    isScreenXs: boolean;
    isScreenSm: boolean;
    isScreenMd: boolean;
    isScreenLg: boolean;
    isScreenXl: boolean;
    isScreenXl2: boolean;
    isNotifyDeparture: boolean;
    setIsNotifyDeparture: IDispatch<boolean>;
    openNotifyDepartureModal: (message: string, to: string) => void;
    pathname: string;
  };

  type IMainTemplateContext = {
    override: IMainTemplateRouteHandle;
    setOverride: (override: IMainTemplateRouteHandle) => void;
  };

  type ICartContext = {
    cart: ICartItem[];
    paymentMethod: ICartPaymentMethod | null;
    setPaymentMethod: IDispatch<ICartPaymentMethod | null>;
    buyerDetails: IBuyerDetails;
    setBuyerDetails: IDispatch<IBuyerDetails>;
    setCart: IDispatch<ICartItem[]>;
    updateCart: () => void;
    selectedCart: string[];
    setSelectedCart: IDispatch<string[]>;
    isLoadingCart: boolean;
    installment: number;
    setInstallment: IDispatch<number>;
    creditCards: ICreditCard[];
    setCreditCards: IDispatch<ICreditCard[]>;
    couponDiscount: number;
    setCouponDiscount: IDispatch<number>;
    finalPrice: number;
    totalDiscount: number;
    projectDiscount: number;
    totalPrice: number;
    pix: IPix;
    setPix: IDispatch<IPix>;
    bill: IBill;
    setBill: IDispatch<IBill>;
    buyerDetailsAddress: IBuyerDetailsAddress;
    setBuyerDetailsAddress: IDispatch<IBuyerDetailsAddress>;
    urlPagarme: string | null;
    setUrlPagarme: IDispatch<string | null>;
    totalPagarmePrice: number;
    setTotalPagarmePrice: IDispatch<number>;
    isPagarmeConnectModalOpen: boolean;
    setIsPagarmeConnectModalOpen: IDispatch<boolean>;
    cartErrorMessage: string | null;
    setCartErrorMessage: IDispatch<string | null>;
    cartErrorTraceId: string | null;
    setCartErrorTraceId: IDispatch<string | null>;
  };

  type IProfileContext = {
    notifications: INotification;
    setNotifications: IDispatch<INotification>;
    profile: IProfile;
    setProfile: IDispatch<IProfile>;
    profileUpdate: () => void;
    imgProfile: string;
    setProfileImg: IDispatch<string>;
  };

  type ISignUpContext = {
    userEmailForConfirmation: string | null;
    setUserEmail: (email: string, country: string) => void;
    clearUserEmail: () => void;
  };

  type ITransactionContext = {
    transactions: IWalletTransactions[];
    setTransactionId: IDispatch<string>;
    setTransactionStatus: IDispatch<ETransactionStatus | undefined>;
    update: (id?: string) => void;
    updateClientTransactions: (clientId: string) => void;
    verifyPaymentStatus: (seconds: number) => void;
    transactionStatus?: ETransactionStatus;
    startDate: Date;
    setStartDate: IDispatch<Date>;
    endDate: Date;
    setEndDate: IDispatch<Date>;
    requestTransactionType: string;
    setRequestTransactionType: IDispatch<string>;
    requestTransactionStatus: string;
    setRequestTransactionStatus: IDispatch<string>;
    clear: () => void;
    setClientId: IDispatch<string | undefined>;
    walletMenuTransactions: IWalletMenuTransactions[];
    setWalletMenuTransactions: IDispatch<IWalletMenuTransactions[]>;
    updateTransactions: () => void;
    isLoading: boolean;
  };
}
