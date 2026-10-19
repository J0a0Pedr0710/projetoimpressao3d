import { act, renderHook } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { useApp } from '@/contexts';
import { apiMock } from '@/test/common/apiMock';
import { MockImport, MockValue } from '@/test/common/importMock';
import { mockAppContext } from '@/test/mocks/contexts';

import { useForgotPassword } from '.';

vi.mock('@/contexts');
vi.mock('react-router-dom');

MockImport([useApp]);

describe('useForgotPassword', () => {
  const navigate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    MockValue(useApp, mockAppContext);
    MockValue(useNavigate, navigate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should request new code and navigate on success', async () => {
    apiMock({ data: { email: 'test@email.com' }, method: 'post', instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useForgotPassword());

    await act(async () => {
      result.current.setValue('email', 'x@y.com');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { setLoading } = useApp();

    expect(setLoading).toHaveBeenCalledWith(true);
    expect(navigate).toHaveBeenCalledWith('/forgot-password/email-confirm?email=test%40email.com');

    vi.advanceTimersByTime(200);

    expect(setLoading).toHaveBeenCalledWith(false);
  });

  it('should show string error on failure', async () => {
    apiMock({
      data: { error: 'Erro' },
      method: 'post',
      error: true,
      instance: 'apiProject3DServer',
    });

    const { result } = renderHook(() => useForgotPassword());

    await act(async () => {
      result.current.setValue('email', 'x@y.com');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith('Erro', 'error');
  });

  it('should show fallback error on non-string error', async () => {
    apiMock({ data: undefined, method: 'post', error: true, instance: 'apiProject3DServer' });

    const { result } = renderHook(() => useForgotPassword());

    await act(async () => {
      result.current.setValue('email', 'x@y.com');
    });

    await act(async () => {
      result.current.onSubmit();
    });

    const { openAlert } = useApp();

    expect(openAlert).toHaveBeenCalledWith(messages.error.ForgotPasswordError, 'error');
  });

  it('should navigate back when back button is clicked', () => {
    const { result } = renderHook(() => useForgotPassword());

    result.current.handleBackButton();

    expect(navigate).toHaveBeenCalledWith(-1);
  });
});
