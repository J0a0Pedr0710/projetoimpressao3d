/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp, useAuth, useSignUpContext } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { projectFaker } from '@/test/common/faker';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext, mockAuthContext } from '@/test/mocks/contexts';

import { useSignUp } from '.';

vi.mock('@/contexts');
vi.mock('react-router-dom');
vi.mock('jwt-decode');

MockImport([useApp, useAuth, useSignUpContext]);

const exaplePw = projectFaker.internet.password({ length: 8, prefix: '@P2a' });

describe('useSignUp', () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    MockValue(useNavigate, navigate);
    MockValue(jwtDecode, { userId: '1', fullName: 'John Doe' });
    MockValue(useApp, mockAppContext);

    MockValue(useAuth, {
      ...mockAuthContext,
    });

    MockValue(useSignUpContext, {
      userEmailForConfirmation: 'test@test.com',
      setUserEmail: vi.fn(),
      clearUserEmail: vi.fn(),
    });
  });

  it('should sign up successfully and redirect to confirm page', async () => {
    apiMock({ method: 'post', data: undefined, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      result.current.setValue('firstName', 'João');
      result.current.setValue('lastName', ' da Silva');
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', exaplePw);
      result.current.setValue('repeatPassword', exaplePw);
      result.current.setValue('acceptTerms', true);
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useSignUpContext().setUserEmail).toHaveBeenCalledWith('test@test.com');
    expect(navigate).toHaveBeenCalledWith('/sign-up/confirm');
  });

  it('should show string error on sign up failure', async () => {
    apiMock({
      method: 'post',
      error: true,
      data: { error: 'error' },
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      result.current.setValue('firstName', 'João');
      result.current.setValue('lastName', ' da Silva');
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', exaplePw);
      result.current.setValue('repeatPassword', exaplePw);
      result.current.setValue('acceptTerms', true);
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith('error', 'error');
  });

  it('should show default error on sign up failure', async () => {
    apiMock({ method: 'post', error: true, data: undefined, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      result.current.setValue('firstName', 'João');
      result.current.setValue('lastName', ' da Silva');
      result.current.setValue('email', 'test@test.com');
      result.current.setValue('password', exaplePw);
      result.current.setValue('repeatPassword', exaplePw);
      result.current.setValue('acceptTerms', true);
      result.current.setValue('acceptTerms', true);
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith(messages.error.signUpError, 'error');
  });

  it('should show error when confirmation code is invalid', async () => {
    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.handleConfirmSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(result.current.errors.confirmationCode).toBeDefined();
  });

  it('should show session expired when email does not exist', async () => {
    MockValue(useSignUpContext, {
      userEmailForConfirmation: null,
      setUserEmail: vi.fn(),
      clearUserEmail: vi.fn(),
    });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.handleConfirmSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(result.current.errors.confirmationCode).toBeDefined();
  });

  it('should confirm account successfully', async () => {
    apiMock({
      method: 'post',
      data: { token: 'jwt-token' },
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      result.current.setValue('confirmationCode', '123456');
    });

    await act(async () => {
      await result.current.handleConfirmSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(useAuth().setToken).toHaveBeenCalledWith('jwt-token');
    expect(useAuth().setUser).toHaveBeenCalled();
    expect(useSignUpContext().clearUserEmail).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith('/sign-up/email-verified');
  });

  it('should show error when token does not exist', async () => {
    apiMock({
      method: 'post',
      data: {},
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.setValue('confirmationCode', '123456');
    });

    await act(async () => {
      await result.current.handleConfirmSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(result.current.errors.confirmationCode).toBeDefined();
  });

  it('should resend confirmation code successfully', async () => {
    apiMock({ method: 'patch', data: undefined, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.handleResendCode();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith(messages.success.newCodeSent, 'success');
  });

  it('should show error when resend code fails', async () => {
    apiMock({ method: 'patch', error: true, data: undefined });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.handleResendCode();
    });

    expect(useApp().openAlert).toHaveBeenCalled();
  });

  it('should show session expired when resending without email', async () => {
    MockValue(useSignUpContext, {
      userEmailForConfirmation: null,
      setUserEmail: vi.fn(),
      clearUserEmail: vi.fn(),
    });

    const { result } = renderHook(() => useSignUp());

    await act(async () => {
      await result.current.handleResendCode();
    });

    expect(useApp().openAlert).toHaveBeenCalledWith(messages.error.sessionExpired, 'error');
  });

  it('should navigate to dashboard on handleAccessProject', () => {
    const { result } = renderHook(() => useSignUp());

    act(() => {
      result.current.handleAccessProject();
    });

    expect(navigate).toHaveBeenCalledWith('/dashboard');
  });

  it('should navigate to profile on handleEditProfile', () => {
    const { result } = renderHook(() => useSignUp());

    act(() => {
      result.current.handleEditProfile();
    });

    expect(navigate).toHaveBeenCalledWith('/profile');
  });

  it('should navigate back on handleBackButton', () => {
    const { result } = renderHook(() => useSignUp());

    act(() => {
      result.current.handleBackButton();
    });

    expect(navigate).toHaveBeenCalledWith(-1);
  });

  it('should toggle password visibility', () => {
    const { result } = renderHook(() => useSignUp());

    expect(result.current.showPassword).toBe(false);

    act(() => {
      result.current.onClickAdornment();
    });

    expect(result.current.showPassword).toBe(true);
  });

  it('should toggle confirm password visibility', () => {
    const { result } = renderHook(() => useSignUp());

    expect(result.current.showConfirmPassword).toBe(false);

    act(() => {
      result.current.onClickConfirmAdornment();
    });

    expect(result.current.showConfirmPassword).toBe(true);
  });
});
