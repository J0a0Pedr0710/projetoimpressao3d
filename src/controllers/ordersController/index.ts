import { apiProject3DServer } from '@/services/api';
import type { IOrdersResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/orders';

const getOrders = () =>
  new Promise<IOrdersResponse>((resolve, reject) =>
    apiProject3DServer
      .get(`${route}/list`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

export const ordersController = { getOrders };
