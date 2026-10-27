import { act, renderHook } from '@testing-library/react';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';
import { ETypeDocuments } from '@/types/enum';

import { useProfilePersonalDataForm } from '.';

vi.mock('@/contexts');

MockImport([useApp, useAuth, useProfile]);

describe('useProfilePersonalDataForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);
    MockValue(useAuth, {
      user: {
        userId: 'user-123',
        firstName: 'John',
        lastName: 'Doe',
      },
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
    });
  });

  it('should update personal data on success', async () => {
    apiMock({
      data: { message: 'Profile updated' },
      method: 'patch',
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfilePersonalDataForm());

    await act(async () => {
      result.current.setValue('firstName', 'Jane');
      result.current.setValue('lastName', 'Smith');
      result.current.setValue('email', 'jane@example.com');
    });

    await act(async () => {
      result.current.onSubmitPersonalData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.success.successEdit, 'success');
  });

  it('should show error when update fails', async () => {
    apiMock({
      data: { message: 'Erro ao atualizar' },
      method: 'patch',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useProfilePersonalDataForm());

    await act(async () => {
      result.current.setValue('firstName', 'Jane');
      result.current.setValue('lastName', 'Smith');
      result.current.setValue('email', 'jane@example.com');
    });

    await act(async () => {
      result.current.onSubmitPersonalData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro ao atualizar', 'error');
  });

  it('should show fallback error when update fails without message', async () => {
    apiMock({ data: undefined, method: 'patch', error: true, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useProfilePersonalDataForm());

    await act(async () => {
      result.current.setValue('firstName', 'Jane');
      result.current.setValue('lastName', 'Smith');
      result.current.setValue('email', 'jane@example.com');
    });

    await act(async () => {
      result.current.onSubmitPersonalData();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.unknownError, 'error');
  });

  it('should change document type', () => {
    const { result } = renderHook(() => useProfilePersonalDataForm());

    act(() => {
      result.current.onChangeDocumentType({ label: 'CNPJ', value: ETypeDocuments.CNPJ });
    });

    expect(result.current.typeDocument).toBe(ETypeDocuments.CNPJ);
  });
});
