import { apiProject3DServer } from '@/services/api';
import { apiMock } from '@/test/common/apiMock';

import { locationController } from '.';

describe('locationController', () => {
  it('returns the location data from the API response', async () => {
    const location = {
      city: 'São Paulo',
      state: 'São Paulo',
      street: 'Rua A',
      neighborhood: 'Centro',
      stateAbbreviation: 'SP',
    };

    apiMock({
      method: 'post',
      data: { location },
    });

    await expect(locationController.getLocation('12345678', 'BR')).resolves.toEqual(location);
    expect(apiProject3DServer.post).toHaveBeenCalledWith('/location', {
      zipCode: '12345678',
      country: 'BR',
    });
  });
});
