import { useState } from 'react';

import type { IProvider } from 'contexts';
import type { ICartItem } from 'models';

import { CartContext } from '@/constants/contexts';

export const CartProvider = ({ children }: IProvider) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [selectedCart, setSelectedCart] = useState<string[]>([]);

  const updateCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        selectedCart,
        setSelectedCart,
        updateCart,
        paymentMethod: null,
        setPaymentMethod: () => {},
        buyerDetails: {} as never,
        setBuyerDetails: () => {},
        isLoadingCart: false,
        installment: 1,
        setInstallment: () => {},
        creditCards: [],
        setCreditCards: () => {},
        couponDiscount: 0,
        setCouponDiscount: () => {},
        finalPrice: 0,
        totalDiscount: 0,
        projectDiscount: 0,
        totalPrice: 0,
        pix: {} as never,
        setPix: () => {},
        bill: {} as never,
        setBill: () => {},
        buyerDetailsAddress: {} as never,
        setBuyerDetailsAddress: () => {},
        urlPagarme: null,
        setUrlPagarme: () => {},
        totalPagarmePrice: 0,
        setTotalPagarmePrice: () => {},
        isPagarmeConnectModalOpen: false,
        setIsPagarmeConnectModalOpen: () => {},
        cartErrorMessage: null,
        setCartErrorMessage: () => {},
        cartErrorTraceId: null,
        setCartErrorTraceId: () => {},
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
