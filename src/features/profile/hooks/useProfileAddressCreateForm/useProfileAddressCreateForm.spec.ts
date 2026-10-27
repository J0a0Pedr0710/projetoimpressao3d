import { act, renderHook } from '@testing-library/react';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';
import { ETypeDocuments } from '@/types/enum';

import { useProfileAddressCreateForm } from '.';

vi.mock('@/contexts');

MockImport([useApp, useAuth, useProfile]);

describe('useProfileAddressCreateForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);
    MockValue(useAuth, {
      token: 'mock-token',
    });
    MockValue(useProfile, {
      profile: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        telephone: '11999999999',
        documents: [
          {
            typeDocument: ETypeDocuments.CPF,
            valueDocument: '12345678900',
          },
        ],
      },
      profileUpdate: vi.fn(),
    });
  });

  it('should create address on success', async () => {
    apiMock({
      data: { message: 'Address created' },
      method: 'post',
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfileAddressCreateForm());

    await act(async () => {
      result.current.setValue('address.street', 'Rua Nova');
      result.current.setValue('address.number', '789');
      result.current.setValue('address.cep', '98765432');
      result.current.setValue('address.city', 'Rio de Janeiro');
      result.current.setValue('address.state', 'Rio de Janeiro');
      result.current.setValue('address.neighborhood', 'Copacabana');
      result.current.setValue('telephone', '11977777777');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();
    const { profileUpdate } = useProfile();

    expect(openAlert).toHaveBeenCalledWith(messages.success.addressAdded, 'success');
    expect(profileUpdate).toHaveBeenCalled();
  });

  it('should show error when create fails', async () => {
    apiMock({
      data: { message: 'Erro ao criar endereço' },
      method: 'post',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfileAddressCreateForm());

    await act(async () => {
      result.current.setValue('address.street', 'Rua Nova');
      result.current.setValue('address.number', '789');
      result.current.setValue('address.cep', '98765432');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro ao criar endereço', 'error');
  });

  it('should show fallback error when create fails without message', async () => {
    apiMock({ data: undefined, method: 'post', error: true, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useProfileAddressCreateForm());

    await act(async () => {
      result.current.setValue('address.street', 'Rua Nova');
      result.current.setValue('address.number', '789');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.unknownError, 'error');
  });
});
