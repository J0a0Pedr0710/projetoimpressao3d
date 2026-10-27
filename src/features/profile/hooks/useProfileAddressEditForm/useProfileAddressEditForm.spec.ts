import { act, renderHook } from '@testing-library/react';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';
import { ETypeDocuments } from '@/types/enum';

import { useProfileAddressEditForm } from '.';

vi.mock('@/contexts');

MockImport([useApp, useAuth, useProfile]);

describe('useProfileAddressEditForm', () => {
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
        addresses: [
          {
            id: 'address-123',
            street: 'Rua Teste',
            number: '123',
            cep: '01234567',
            city: 'São Paulo',
            state: 'São Paulo',
            neighborhood: 'Centro',
            country: 'Brasil',
            isDefault: true,
          },
        ],
        documents: [
          {
            typeDocument: ETypeDocuments.CPF,
            valueDocument: '12345678900',
          },
        ],
      },
    });
  });

  it('should update address on success', async () => {
    apiMock({
      data: { message: 'Address updated' },
      method: 'patch',
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfileAddressEditForm());

    await act(async () => {
      result.current.setValue('address.street', 'Nova Rua');
      result.current.setValue('address.number', '456');
      result.current.setValue('telephone', '11988888888');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.success.successEdit, 'success');
  });

  it('should show error when update fails', async () => {
    apiMock({
      data: { message: 'Erro ao atualizar endereço' },
      method: 'patch',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfileAddressEditForm());

    await act(async () => {
      result.current.setValue('address.street', 'Nova Rua');
      result.current.setValue('address.number', '456');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro ao atualizar endereço', 'error');
  });

  it('should show fallback error when update fails without message', async () => {
    apiMock({ data: undefined, method: 'patch', error: true, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useProfileAddressEditForm());

    await act(async () => {
      result.current.setValue('address.street', 'Nova Rua');
      result.current.setValue('address.number', '456');
    });

    await act(async () => {
      result.current.onSubmitAddressData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.unknownError, 'error');
  });
});
