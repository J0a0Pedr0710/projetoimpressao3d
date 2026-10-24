import type { IElement } from '@/types/props';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/contexts';

export const RegisteredMiddlewares = ({ children }: IElement) => {
  const { user, token } = useAuth();

  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
