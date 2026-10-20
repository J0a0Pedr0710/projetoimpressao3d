import { apiProject3DServer } from '@/services/api';
import { apiMock } from '@/test/common/apiMock';

import { profileController } from '.';
import { ETypeDocuments } from '@/types/enum';

describe('profileController', () => {
  it('updates the profile with the payload as the request body', async () => {
    const data = {
      firstName: 'João',
      lastName: 'Silva',
      email: 'joao@example.com',
      cpf: '13988368695',
      documents: [{ typeDocument: ETypeDocuments.CPF, valueDocument: '13988368695' }],
    };

    apiMock({
      method: 'patch',
      instance: 'apiProject3DServer',
      data: { message: 'Success' },
    });

    await profileController.updateProfile(data);

    expect(apiProject3DServer.patch).toHaveBeenCalledWith('/profile', data);
  });

  it('removes the profile address', async () => {
    apiMock({
      method: 'delete',
      instance: 'apiProject3DServer',
      data: undefined,
    });

    await expect(profileController.removeProfileAddress()).resolves.toBeUndefined();
    expect(apiProject3DServer.delete).toHaveBeenCalledWith('/profile/address');
  });
});
