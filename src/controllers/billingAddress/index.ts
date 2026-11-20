import { apiProject3DServer } from '@/services/api';
import type { IBillingAddressInputModel } from '@/types/props';
import type { IBillingAddressResponse } from '@/types/response';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/billing';

const getBillingAddresses = () =>
  new Promise<{ billingAddresses: IBillingAddressResponse[] }>((resolve, reject) =>
    apiProject3DServer
      .get(`${route}/addresses`)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const addBillingAddress = (data: IBillingAddressInputModel) =>
  new Promise<{ billingAddress: IBillingAddressResponse }>((resolve, reject) =>
    apiProject3DServer
      .post(`${route}/addAddress`, data)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const removeBillingAddress = (billingAddressId: string) =>
  new Promise<void>((resolve, reject) =>
    apiProject3DServer
      .delete(`${route}/removeAddress/${billingAddressId}`)
      .then(() => resolve())
      .catch((error) => reject(errorMessage(error))),
  );

const updateBillingAddress = (billingAddressId: string, data: IBillingAddressInputModel) =>
  new Promise<{ billingAddress: IBillingAddressResponse }>((resolve, reject) =>
    apiProject3DServer
      .patch(`${route}/updateAddress/${billingAddressId}`, data)
      .then(({ data }) => resolve(data))
      .catch((error) => reject(errorMessage(error))),
  );

const setDefaultBillingAddress = (billingAddressId: string) =>
  new Promise<void>((resolve, reject) =>
    apiProject3DServer
      .patch(`${route}/Address/${billingAddressId}/default`)
      .then(() => resolve())
      .catch((error) => reject(errorMessage(error))),
  );

export const billingAddressController = {
  getBillingAddresses,
  addBillingAddress,
  removeBillingAddress,
  updateBillingAddress,
  setDefaultBillingAddress,
};
