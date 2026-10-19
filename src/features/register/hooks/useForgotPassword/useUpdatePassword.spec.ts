import { act, renderHook } from '@testing-library/react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';

import { useUpdatePassword } from '.';

vi.mock('@/contexts');
vi.mock('react-router-dom');

MockImport([useApp]);

describe('useUpdatePassword', () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    MockValue(useApp, mockAppContext);
    MockValue(useNavigate, navigate);
    MockValue(useSearchParams, [new URLSearchParams('email=test@email.com&code=123')]);
  });

  it('should show error if email or code is missing', async () => {
    MockValue(useSearchParams, [new URLSearchParams('')]);

    const { result } = renderHook(() => useUpdatePassword());

    await act(async () => {
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.expiredOrInvalidLink, 'error');
  });

  it('should update password and navigate on success', async () => {
    apiMock({ data: undefined, method: 'patch', instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useUpdatePassword());

    await act(async () => {
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.success.successfullyResetPassword, 'success');
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should show string error and fallback error on failure', async () => {
    apiMock({
      data: { error: 'Erro' },
      method: 'patch',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useUpdatePassword());

    await act(async () => {
      result.current.setValue('newPassword', '@Postaqui26');
      result.current.setValue('confirmPassword', '@Postaqui26');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro', 'error');
    expect(openAlert).toHaveBeenCalledWith(messages.error.UpdatePasswordError, 'error');
  });

  it('should toggle password visibility states', () => {
    const { result } = renderHook(() => useUpdatePassword());

    act(() => result.current.onClickAdornment());
    expect(result.current.showPassword).toBe(true);

    act(() => result.current.onClickConfirmAdornment());
    expect(result.current.showConfirmPassword).toBe(true);
  });

  it('should navigate back on cancel', () => {
    const { result } = renderHook(() => useUpdatePassword());

    result.current.handleCancelButton();

    expect(navigate).toHaveBeenCalledWith(-1);
  });
});
