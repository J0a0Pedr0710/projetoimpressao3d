import type {
  IAddShippingToCart,
  ICalculatorPackageRequest,
  ICartItemsInputModel,
  ICouponResponse,
  IGenerateQuotationDocumentRequest,
  IPaymentBuyerDetailsInputModel,
  IPaymentInputModel,
} from 'props';
import type {
  ICalculatorResponse,
  ICartItemResponse,
  ICheckoutResponse,
  ICheckoutSplitResponse,
} from 'response';

import { apiInterfreight } from '@/services';
import { errorMessage } from '@/utils/services/errorMessage';

const routeInterfreight = '/calculator';

const getCartItems = () =>
  new Promise<ICartItemResponse>((resolve, reject) =>
    apiInterfreight
      .get(`${routeInterfreight}/cart`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const addCreditWallet = (value: number) => {
  const formData = new FormData();
  formData.append(
    'body',
    JSON.stringify({
      type: 'WALLET',
      amount: value,
    }),
  );

  return new Promise<ICartItemResponse>((resolve, reject) =>
    apiInterfreight
      .post(`${routeInterfreight}/cart/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const deleteItems = (items: string[]) =>
  new Promise<ICartItemResponse>((resolve, reject) =>
    apiInterfreight
      .delete(`${routeInterfreight}/cart`, {
        data: {
          itemsIds: items,
        },
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const checkout = (
  payment: IPaymentInputModel,
  items: ICartItemsInputModel[],
  buyerDetails: IPaymentBuyerDetailsInputModel,
) =>
  new Promise<ICheckoutResponse>((resolve, reject) =>
    apiInterfreight
      .post(`${routeInterfreight}/cart/payment`, {
        payment,
        items,
        buyerDetails,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error, false, true))),
  );

const checkoutSplit = (items: ICartItemsInputModel[]) =>
  new Promise<ICheckoutSplitResponse>((resolve, reject) =>
    apiInterfreight
      .post(`${routeInterfreight}/cart/payment/split`, {
        items,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error, false, true))),
  );

const addShipping = (input: IAddShippingToCart) => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(input.body));
  input.files.forEach((file) => formData.append('files', file));

  return new Promise<ICartItemResponse>((resolve, reject) =>
    apiInterfreight
      .post(`${routeInterfreight}/cart/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );
};

const calculatePackage = (input: ICalculatorPackageRequest) =>
  new Promise<ICalculatorResponse>((resolve, reject) =>
    apiInterfreight
      .post(`${routeInterfreight}/simulate`, input)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const addCoupon = (coupon: string) =>
  new Promise<ICouponResponse>((resolve, reject) =>
    apiInterfreight
      .get(`${routeInterfreight}/coupon/${coupon}`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const generateQuotationDocument = (
  input: IGenerateQuotationDocumentRequest,
  signal?: AbortSignal,
) =>
  new Promise<BlobPart>((resolve, reject) =>
    apiInterfreight
      .post('/representative/quotation', input, {
        responseType: 'blob',
        signal,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error)),
  );

const saveMarkup = (markup: number) =>
  new Promise((resolve, reject) =>
    apiInterfreight
      .patch(`${routeInterfreight}/markup`, { markup })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const calculatorController = {
  checkoutSplit,
  getCartItems,
  addCreditWallet,
  deleteItems,
  checkout,
  calculatePackage,
  addShipping,
  addCoupon,
  generateQuotationDocument,
  saveMarkup,
};
