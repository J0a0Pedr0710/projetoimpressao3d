import { useCallback, useEffect, useState } from 'react';

import type { IAuthContext, IProvider } from '@/types/contexts';
import { jwtDecode } from 'jwt-decode';
import type { IUser } from 'models';
import { useLocation, useNavigate } from 'react-router-dom';

import { messages } from '@/assets/messages';
import { AuthContext } from '@/constants/contexts';
import { emptyUser } from '@/constants/emptyValues';
import { useApp } from '@/contexts';
import { authController } from '@/controllers/authController';
import { usePersistedState } from '@/hooks/usePersistedState';

export const AuthProvider = ({ children }: IProvider) => {
  const { openAlert, setLoading } = useApp();

  const [token, setToken] = usePersistedState<string | undefined>('@project.tokenUser', undefined);

  const [user, setUser] = usePersistedState<IUser>('@project.user', emptyUser);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const { authError } = messages.error;
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const checkTokenValidity = useCallback(() => {
    if (!token) {
      setIsTokenValid(false);
      return;
    }

    try {
      const decoded = jwtDecode<{ exp: number }>(token);
      const currentTime = Date.now() / 1000;
      const isValid = decoded.exp > currentTime;

      setIsTokenValid(isValid);

      if (!isValid) {
        openAlert(messages.error.sessionExpiredOnLogin, 'error');
        logout();
      }
    } catch (error) {
      setIsTokenValid(false);
      openAlert(error instanceof Error ? error.message : messages.error.tokenInvalid, 'error');
      logout();
    }
  }, [token, openAlert]);

  useEffect(() => {
    if (token) {
      checkTokenValidity();
      return;
    }

    setIsTokenValid(false);
  }, [token, checkTokenValidity]);

  useEffect(() => {
    if (!token) return;

    setLoading(true);
    authController
      .verifyToken()
      .then(() => setIsTokenValid(true))
      .catch((errorMessage) => {
        openAlert(errorMessage ?? authError, 'error');
        logout();
      })
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    const allowRoutes = ['/sign-up/confirm', '/forgotPassword'];
    if (!token && !allowRoutes.includes(pathname)) {
      logout();
    }
  }, [token]);

  const logout = () => {
    setUser(emptyUser);
    setLoading(true);
    setIsTokenValid(false);
    setToken(undefined);
    navigate('/');
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  const authContext: IAuthContext = {
    token,
    setToken,
    user,
    setUser,
    isTokenValid,
    logout,
  };
  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};
