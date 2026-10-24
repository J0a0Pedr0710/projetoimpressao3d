import { act, renderHook } from '@testing-library/react';

import { messages } from '@/assets/messages';
import { useApp, useAuth } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';

import { useManagePassword } from '.';

vi.mock('@/contexts');

MockImport([useApp, useAuth]);

describe('useManagePassword', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useApp, mockAppContext);
    MockValue(useAuth, {
      user: {
        userId: 'user-123',
      },
    });
  });

  it('should update password and reset fields on success', async () => {
    apiMock({
      data: { message: 'Password updated' },
      method: 'patch',
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useManagePassword());

    await act(async () => {
      result.current.setValue('oldPassword', '@Postaqui25');
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.success.successEdit, 'success');
  });

  it('should show string error when updatePassword fails', async () => {
    apiMock({
      data: { message: 'Erro' },
      method: 'patch',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useManagePassword());

    await act(async () => {
      result.current.setValue('oldPassword', '@Postaqui25');
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro', 'error');
  });

  it('should show fallback error when updatePassword fails without message', async () => {
    apiMock({ data: undefined, method: 'patch', error: true, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useManagePassword());

    await act(async () => {
      result.current.setValue('oldPassword', '@Postaqui25');
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.unknownError, 'error');
  });

  it('should toggle password visibility states', () => {
    const { result } = renderHook(() => useManagePassword());

    act(() => result.current.onClickEndadornment());
    expect(result.current.showPassword).toBe(true);

    act(() => result.current.onClickConfirmAdornment());
    expect(result.current.showConfirmPassword).toBe(true);

    act(() => result.current.onClickOldPassword());
    expect(result.current.showOldPassword).toBe(true);
  });
});
