import { act, renderHook, waitFor } from '@testing-library/react';
import { useWatch } from 'react-hook-form';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useProfile } from '@/contexts';
import { apiProject3DServer } from '@/services/api';
import { apiMock } from '@/test/common/apiMock';
import { projectFaker } from '@/test/common/faker';
import { MockImport, MockValue } from '@/test/common/importMock';
import { setupHook } from '@/test/common/setupHook';
import { mockAppContext, mockAuthContext } from '@/test/mocks/contexts';
import { ETypeDocuments } from '@/types/enum';

import { useProfileForm } from '.';

vi.mock('@/contexts');

MockImport([useApp, useAuth, useProfile]);

describe('useProfileForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);

    MockValue(useAuth, {
      ...mockAuthContext,
      user: { userId: '1', fullName: 'John Doe' },
      token: 'token',
    });

    MockValue(useProfile, {
      profile: {
        fullName: 'John Doe',
        email: 'john@test.com',
        ddi: '55',
        telephone: '999999999',
        address: {
          country: 'BR',
          number: '10',
          street: 'Rua A',
          cep: '',
          city: 'SP',
          complement: '',
          neighborhood: 'Centro',
          state: 'São Paulo',
          shortState: 'SP',
        },
        documents: [
          {
            typeDocument: ETypeDocuments.CPF,
            valueDocument: '12345678900',
          },
        ],
      },
    });
  });

  it('should load profile data when profile and token exist', async () => {
    setupHook(() => useProfileForm());

    await waitFor(() => {
      expect(useApp().setLoading).toHaveBeenCalledWith(false);
    });
  });

  it('should format the loaded document value according to its type', async () => {
    const { result } = setupHook(() => useProfileForm());
    const { result: documentValue } = renderHook(() =>
      useWatch({
        control: result.current.control,
        name: 'documents.0.valueDocument',
      }),
    );

    await waitFor(() => {
      expect(documentValue.current).toBe('123.456.789-00');
    });
  });

  it('should show address fields returned by the profile API', async () => {
    MockValue(useProfile, {
      profile: {
        firstName: 'João Pedro',
        lastName: 'Ferreira Silva',
        email: 'joao@example.com',
        ddi: '',
        telephone: '',
        address: {
          country: 'BR',
          cep: '37548000',
          street: '',
          number: '155',
          complement: 'Casa',
          neighborhood: '',
          city: 'Conceição dos Ouros',
          state: 'MG',
          shortState: '',
        },
        documents: [],
      },
    });

    const { result } = setupHook(() => useProfileForm());
    const { result: addressFields } = renderHook(() =>
      useWatch({
        control: result.current.control,
        name: [
          'address.cep',
          'address.street',
          'address.number',
          'address.complement',
          'address.neighborhood',
          'address.city',
          'address.state',
          'address.stateAbbreviation',
        ],
      }),
    );

    await waitFor(() => {
      expect(addressFields.current).toEqual([
        '37548-000',
        '',
        '155',
        'Casa',
        '',
        'Conceição dos Ouros',
        'MG',
        'MG',
      ]);
    });
  });

  it('should call getLocation when cep is valid and edited by user', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      data: {
        location: {
          city: 'São Paulo',
          state: 'São Paulo',
          street: 'Rua A',
          neighborhood: 'Centro',
          stateAbbreviation: 'SP',
        },
      },
    });

    const { result } = setupHook(() => useProfileForm());
    const { result: locationFields } = renderHook(() =>
      useWatch({
        control: result.current.control,
        name: [
          'address.city',
          'address.state',
          'address.street',
          'address.neighborhood',
          'address.stateAbbreviation',
        ],
      }),
    );

    act(() => {
      result.current.customSetValue('address.cep', '87654321');
    });

    await waitFor(() => {
      expect(result.current.disableFields.length).toBeGreaterThan(0);
      expect(locationFields.current).toEqual(['São Paulo', 'São Paulo', 'Rua A', 'Centro', 'SP']);
    });
  });

  it('should block fields when getLocation throws error for Brazil', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      error: true,
      data: undefined,
    });

    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.cep', '12345-678');
    });

    act(() => {
      result.current.customSetValue(
        'address.cep',
        projectFaker.location.zipCode({ format: '##.###-###' }),
      );
    });

    await waitFor(() => {
      expect(result.current.disableFields).toEqual([
        'city',
        'state',
        'street',
        'neighborhood',
        'stateAbbreviation',
      ]);
    });
  });

  it('should not submit when document is invalid', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      data: {
        location: {
          city: 'São Paulo',
          state: 'São Paulo',
          street: 'Rua A',
          neighborhood: 'Centro',
          stateAbbreviation: 'SP',
        },
      },
    });

    const { result } = setupHook(() => useProfileForm());

    await act(async () => {
      result.current.customSetValue('address.cep', '87654321');
    });

    await waitFor(() => {
      expect(result.current.disableFields.length).toBeGreaterThan(0);
    });

    await act(async () => {
      result.current.customSetValue('documents', [
        {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: 'invalid',
        },
      ]);
    });

    await act(async () => {
      await result.current.onSubmitPersonalData();
    });

    expect(useApp().openAlert).not.toHaveBeenCalled();
    expect(apiProject3DServer.patch).not.toHaveBeenCalled();
  });

  it('should submit personal data successfully', async () => {
    apiMock({
      method: 'patch',
      data: { message: 'Success' },
      instance: 'apiProject3DServer',
    });

    const { result } = setupHook(() => useProfileForm());
    const formattedCpf = projectFaker.custom.cpf({ formatted: true });

    await act(async () => {
      result.current.customSetValue('firstName', 'New');
      result.current.customSetValue('lastName', 'Name');
      result.current.customSetValue('documents', [
        {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: formattedCpf,
        },
      ]);
    });

    await act(async () => {
      await result.current.onSubmitPersonalData();
    });

    expect(apiProject3DServer.patch).toHaveBeenCalledWith('/profile', {
      data: {
        firstName: 'New',
        lastName: 'Name',
        email: 'john@test.com',
        documents: [{ typeDocument: ETypeDocuments.CPF, valueDocument: formattedCpf }],
      },
    });
    expect(useApp().openAlert).toHaveBeenCalledWith(messages.success.successEdit, 'success');
  });

  it('should submit only address data successfully', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      data: {
        location: {
          city: 'São Paulo',
          state: 'São Paulo',
          street: 'Rua A',
          neighborhood: 'Centro',
          stateAbbreviation: 'SP',
        },
      },
    });

    apiMock({
      method: 'patch',
      data: { message: 'Success' },
      instance: 'apiProject3DServer',
    });

    const { result } = setupHook(() => useProfileForm());

    await act(async () => {
      result.current.customSetValue('address.cep', '87654-321');
      result.current.customSetValue('telephone', '(35) 98404-3674');
    });

    await waitFor(() => {
      expect(result.current.disableFields.length).toBeGreaterThan(0);
    });

    await act(async () => {
      await result.current.onSubmitAddressData();
    });

    expect(apiProject3DServer.patch).toHaveBeenCalledWith('/profile', {
      data: {
        telephone: '(35) 98404-3674',
        address: {
          cep: '87654-321',
          country: 'BR',
          city: 'São Paulo',
          state: 'São Paulo',
          street: 'Rua A',
          number: '10',
          complement: '',
          neighborhood: 'Centro',
        },
      },
    });
    expect(useApp().openAlert).toHaveBeenCalledWith(messages.success.successEdit, 'success');
  });

  it('should show error alert when update profile fails', async () => {
    apiMock({
      method: 'patch',
      error: true,
      data: undefined,
      instance: 'apiProject3DServer',
    });

    const { result } = setupHook(() => useProfileForm());

    await act(async () => {
      result.current.customSetValue('documents', [
        {
          typeDocument: ETypeDocuments.CPF,
          valueDocument: projectFaker.custom.cpf({ formatted: true }),
        },
      ]);
    });

    await act(async () => {
      await result.current.onSubmitPersonalData();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith(messages.error.unknownError, 'error');
  });

  it('should block fields when cep is invalid but has correct length after user edits it for Brazil', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      error: true,
      data: undefined,
    });

    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.cep', '12.345-678');
    });

    act(() => {
      result.current.customSetValue('address.cep', '99999-999');
    });

    await waitFor(() => {
      expect(result.current.disableFields).toEqual([
        'city',
        'state',
        'street',
        'neighborhood',
        'stateAbbreviation',
      ]);
    });
  });

  it('should keep Brazil selected when a different country is set', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      error: true,
      data: undefined,
    });

    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.country', 'US');
    });

    act(() => {
      result.current.customSetValue('address.cep', '12345');
    });

    await waitFor(() => {
      expect(result.current.country).toBe('BR');
      expect(result.current.disableFields).toEqual([]);
    });
  });

  it('should prevent submission when CEP is invalid for Brazil', async () => {
    apiMock({
      method: 'post',
      instance: 'apiProject3DServer',
      error: true,
      data: undefined,
    });

    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.cep', '99999-999');
    });

    await act(async () => {
      await result.current.onSubmitAddressData();
    });

    expect(useApp().openAlert).not.toHaveBeenCalled();
  });

  it('should prevent submission when CEP is empty', async () => {
    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.cep', '');
    });

    await act(async () => {
      await result.current.onSubmitAddressData();
    });

    expect(useApp().openAlert).not.toHaveBeenCalled();
  });

  it('should prevent submission when a non-Brazilian postal code is entered', async () => {
    const { result } = setupHook(() => useProfileForm());

    act(() => {
      result.current.customSetValue('address.country', 'US');
    });

    act(() => {
      result.current.customSetValue('address.cep', '12345');
    });

    await waitFor(() => {
      expect(result.current.disableFields).toEqual([]);
    });

    await act(async () => {
      await result.current.onSubmitAddressData();
    });

    expect(result.current.country).toBe('BR');
    expect(useApp().openAlert).not.toHaveBeenCalled();
  });
});
