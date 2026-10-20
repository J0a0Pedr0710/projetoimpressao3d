import type { IAppContext, IAuthContext, ICartContext } from '@/types/contexts';

import { projectFaker } from '../common/faker';
import { mockUser } from './models';
import { mockBill, mockBuyerDetails, mockBuyerDetailsAddress, mockPix } from './props';

export const mockAppContext: IAppContext = {
  loading: false,
  setLoading: vi.fn(),
  layoutMenuOpen: null,
  setLayoutMenuOpen: vi.fn(),
  openAlert: vi.fn(),
  isScreenXxs: true,
  isScreenXs: true,
  isScreenSm: true,
  isScreenMd: true,
  isScreenLg: true,
  isScreenXl: true,
  isScreenXl2: true,
  isNotifyDeparture: false,
  setIsNotifyDeparture: vi.fn(),
  openNotifyDepartureModal: vi.fn(),
  pathname: '/',
};

export const mockAuthContext: IAuthContext = {
  isTokenValid: true,
  logout: vi.fn(),
  token: projectFaker.string.uuid(),
  user: mockUser,
  setToken: vi.fn(),
  setUser: vi.fn(),
};

export const mockCartContext: ICartContext = {
  cart: [],
  paymentMethod: null,
  setPaymentMethod: vi.fn(),
  buyerDetails: mockBuyerDetails,
  setBuyerDetails: vi.fn(),
  setCart: vi.fn(),
  updateCart: vi.fn(),
  selectedCart: [],
  setSelectedCart: vi.fn(),
  isLoadingCart: false,
  installment: 0,
  setInstallment: vi.fn(),
  creditCards: [],
  setCreditCards: vi.fn(),
  couponDiscount: 0,
  setCouponDiscount: vi.fn(),
  finalPrice: 0,
  totalDiscount: 0,
  projectDiscount: 0,
  totalPrice: 0,
  pix: mockPix,
  setPix: vi.fn(),
  bill: mockBill,
  setBill: vi.fn(),
  buyerDetailsAddress: mockBuyerDetailsAddress,
  setBuyerDetailsAddress: vi.fn(),
  urlPagarme: '',
  setUrlPagarme: vi.fn(),
  totalPagarmePrice: 0,
  setTotalPagarmePrice: vi.fn(),
  isPagarmeConnectModalOpen: false,
  setIsPagarmeConnectModalOpen: vi.fn(),
  cartErrorMessage: null,
  setCartErrorMessage: vi.fn(),
  cartErrorTraceId: null,
  setCartErrorTraceId: vi.fn(),
};
