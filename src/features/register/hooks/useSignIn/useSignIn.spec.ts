import { act, renderHook, waitFor } from '@testing-library/react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useSignUpContext } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext, mockAuthContext } from '@/test/mocks/contexts';

import { useSignIn } from '.';

vi.mock('@/contexts');
vi.mock('react-router-dom');
vi.mock('@reactour/tour');
vi.mock('jwt-decode');

MockImport([useApp, useAuth, useSignUpContext]);

describe('useSignIn', () => {
  const navigate = vi.fn();
  const setIsOpen = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useNavigate, navigate);
    MockValue(jwtDecode, { userId: '1', fullName: 'John Doe' });

    MockValue(useApp, mockAppContext);

    MockValue(useAuth, {
      ...mockAuthContext,
      isTokenValid: false,
    });

    MockValue(useSignUpContext, {
      setUserEmail: vi.fn(),
    });
  });

  it('should redirect to dashboard when token is valid', async () => {
    MockValue(useAuth, {
      ...mockAuthContext,
      isTokenValid: true,
    });

    renderHook(() => useSignIn());

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should close tour when token is not valid', () => {
    renderHook(() => useSignIn());

    expect(setIsOpen).toHaveBeenCalledWith(false);
  });

  it('should navigate to sign-up when handleSignUpButton is called', () => {
    const { result } = renderHook(() => useSignIn());

    act(() => {
      result.current.handleSignUpButton();
    });

    expect(navigate).toHaveBeenCalledWith('/sign-up');
  });

  it('should toggle showPassword when onClickEndadornment is called', () => {
    const { result } = renderHook(() => useSignIn());

    expect(result.current.showPassword).toBe(false);

    act(() => {
      result.current.onClickEndadornment();
    });

    expect(result.current.showPassword).toBe(true);
  });

  it('should sign in successfully with token', async () => {
    apiMock({
      method: 'post',
      data: { token: 'jwt-token' },
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignIn());

    await act(async () => {
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', '123456');
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useAuth().setToken).toHaveBeenCalledWith('jwt-token');
    expect(useAuth().setUser).toHaveBeenCalled();
  });

  it('should redirect to confirm sign-up when user is not confirmed', async () => {
    apiMock({
      method: 'post',
      data: { error: messages.error.userNotConfirmed },
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignIn());
    const { setLoading } = useApp();

    await act(async () => {
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', '123456');
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useSignUpContext().setUserEmail).toHaveBeenCalledWith('test@test.com');
    expect(setLoading).toHaveBeenCalledWith(false);
    expect(navigate).toHaveBeenCalledWith('/sign-up/confirm');
  });

  it('should show error alert when sign in fails', async () => {
    apiMock({
      method: 'post',
      error: true,
      data: undefined,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignIn());
    const { setLoading } = useApp();

    await act(async () => {
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', '123456');
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith(messages.error.loginError, 'error');
    expect(setIsOpen).toHaveBeenCalledWith(false);
    expect(setLoading).toHaveBeenCalledWith(false);
  });
});
