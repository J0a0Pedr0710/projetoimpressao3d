import { apiProject3DServer } from '@/services/api';
import type { IAddProductToCart, ICreateOrderAddress } from '@/types/props';
import type { ICreateOrderResponse, IProductCartResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const routeProject3DServer = '/cart';
const routeOrders = '/orders';

const addCart = (item: IAddProductToCart) =>
  new Promise<IProductCartResponse>((resolve, reject) =>
    apiProject3DServer
      .post(routeProject3DServer, item)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const createOrder = (address: ICreateOrderAddress) =>
  new Promise<ICreateOrderResponse>((resolve, reject) =>
    apiProject3DServer
      .post(routeOrders, { address })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const cartController = {
  addCart,
  createOrder,
};
