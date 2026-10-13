import type { AxiosInstance } from 'axios';
import type { IRequest } from 'tests';

import { apiInterfreight, apiPagarme } from '@/services';

export const apiMock = ({ method, data, error, instance = 'apiInterfreight' }: IRequest) => {
  const response = {
    data,
    status: error ? 500 : 200,
  };

  const instances = {
    apiPagarme,
    apiInterfreight,
  };

  const currentApi: AxiosInstance = instances[instance];

  if (error) {
    vi.spyOn(currentApi, method).mockRejectedValue(response);
    return;
  }
  vi.spyOn(currentApi, method).mockResolvedValue(response);
};
