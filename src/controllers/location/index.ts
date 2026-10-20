import type { ILocationZipCodeResponse } from 'response';

import { apiProject3DServer } from '@/services/api';
import { errorMessage } from '@/utils/services/errorMessage';

const route = '/location';

const getLocation = (zipCode: string, countryCode: string) =>
  new Promise<ILocationZipCodeResponse>((resolve, reject) =>
    apiProject3DServer
      .post(route, { zipCode, country: countryCode })
      .then(({ data }) => resolve(data.location))
      .catch((error) => reject(errorMessage(error))),
  );

export const locationController = {
  getLocation,
};
