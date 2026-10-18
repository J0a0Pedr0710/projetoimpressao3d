import type {
  IAddShippingToCart,
  ICalculatorPackageRequest,
  ICartItemsInputModel,
  ICouponResponse,
  IGenerateQuotationDocumentRequest,
  IPaymentBuyerDetailsInputModel,
  IPaymentInputModel,
} from 'props';

import { apiProject3DServer } from '@/services/api';
import type { ICalculatorResponse, ICartItemResponse, ICheckoutResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const routeProject3DServer = '/calculator';

const getCartItems = () =>
  new Promise<ICartItemResponse>((resolve, reject) =>
    apiProject3DServer
      .get(`${routeProject3DServer}/cart`)
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
    apiProject3DServer
      .post(`${routeProject3DServer}/cart/add`, formData, {
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
    apiProject3DServer
      .delete(`${routeProject3DServer}/cart`, {
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
    apiProject3DServer
      .post(`${routeProject3DServer}/cart/payment`, {
        payment,
        items,
        buyerDetails,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error, false, true))),
  );

const addShipping = (input: IAddShippingToCart) => {
  const formData = new FormData();
  formData.append('body', JSON.stringify(input.body));
  input.files.forEach((file) => formData.append('files', file));

  return new Promise<ICartItemResponse>((resolve, reject) =>
    apiProject3DServer
      .post(`${routeProject3DServer}/cart/add`, formData, {
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
    apiProject3DServer
      .post(`${routeProject3DServer}/simulate`, input)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const addCoupon = (coupon: string) =>
  new Promise<ICouponResponse>((resolve, reject) =>
    apiProject3DServer
      .get(`${routeProject3DServer}/coupon/${coupon}`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const generateQuotationDocument = (
  input: IGenerateQuotationDocumentRequest,
  signal?: AbortSignal,
) =>
  new Promise<BlobPart>((resolve, reject) =>
    apiProject3DServer
      .post('/representative/quotation', input, {
        responseType: 'blob',
        signal,
      })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error)),
  );

const saveMarkup = (markup: number) =>
  new Promise((resolve, reject) =>
    apiProject3DServer
      .patch(`${routeProject3DServer}/markup`, { markup })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const calculatorController = {
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
