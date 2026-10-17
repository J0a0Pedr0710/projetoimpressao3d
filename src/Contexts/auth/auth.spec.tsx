import { useContext } from 'react';

import { act, renderHook, waitFor } from '@testing-library/react';
import { jwtDecode } from 'jwt-decode';
import type { IUser } from 'models';
import { useLocation, useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { messages } from '@/assets/messages';
import { AuthContext } from '@/constants/contexts';
import { emptyUser } from '@/constants/emptyValues';
import { useApp } from '@/contexts';
import { MockImport, MockValue } from '@/test/common/importMock';

import { AuthProvider } from '.';

vi.mock('react-router-dom');
vi.mock('jwt-decode');
vi.mock('@/contexts');

MockImport([useNavigate, useApp]);

const mockNavigate = vi.fn();
const mockSetLoading = vi.fn();
const mockOpenAlert = vi.fn();

const useTestAuthContext = () => useContext(AuthContext);

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

const setup = () => renderHook(() => useTestAuthContext(), { wrapper });

describe('AuthProvider context', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();

    MockValue(useNavigate, mockNavigate);
    MockValue(useApp, {
      openAlert: mockOpenAlert,
      setLoading: mockSetLoading,
    });
    MockValue(useLocation, { pathname: '/' });
  });

  it('should provide default auth context values', () => {
    const { result } = setup();

    expect(result.current.token).toBeUndefined();
    expect(result.current.user).toEqual(emptyUser);
    expect(result.current.isTokenValid).toBe(false);
  });

  it('should allow unauthenticated users to access the sign-up route', () => {
    MockValue(useLocation, { pathname: '/sign-up' });

    setup();

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should update token when setToken is called with a valid token', async () => {
    vi.mocked(jwtDecode).mockReturnValue({
      exp: Date.now() / 1000 + 1000,
    });

    const { result } = setup();

    act(() => {
      result.current.setToken('valid-token');
    });

    await waitFor(() => {
      expect(result.current.token).toBe('valid-token');
      expect(result.current.isTokenValid).toBe(true);
    });
  });

  it('should update user when setUser is called', () => {
    const { result } = setup();

    act(() => {
      result.current.setUser({ userId: '1', fullName: 'John' } as IUser);
    });

    expect(result.current.user).toEqual({ userId: '1', fullName: 'John' });
  });

  it('should invalidate token when token is expired', async () => {
    vi.mocked(jwtDecode).mockReturnValue({
      exp: Date.now() / 1000 - 10,
    });

    const { result } = setup();

    act(() => {
      result.current.setToken('expired-token');
    });

    await waitFor(() => {
      expect(mockOpenAlert).toHaveBeenCalledWith(messages.error.sessionExpiredOnLogin, 'error');
      expect(result.current.token).toBeUndefined();
      expect(result.current.isTokenValid).toBe(false);
    });
  });

  it('should invalidate token when jwtDecode throws error', async () => {
    vi.mocked(jwtDecode).mockImplementation(() => {
      throw new Error('invalid token');
    });

    const { result } = setup();

    act(() => {
      result.current.setToken('invalid-token');
    });

    await waitFor(() => {
      expect(mockOpenAlert).toHaveBeenCalled();
      expect(result.current.token).toBeUndefined();
      expect(result.current.isTokenValid).toBe(false);
    });
  });

  it('should logout correctly', async () => {
    vi.useFakeTimers();

    const { result } = setup();

    act(() => {
      result.current.logout();
    });

    expect(result.current.token).toBeUndefined();
    expect(result.current.user).toEqual(emptyUser);
    expect(result.current.isTokenValid).toBe(false);
    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(mockSetLoading).toHaveBeenCalledWith(true);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(mockSetLoading).toHaveBeenLastCalledWith(false);

    vi.useRealTimers();
  });
});
