import { createContext } from 'react';

import type {
  IAppContext,
  IAuthContext,
  ICartContext,
  IMainTemplateContext,
  IProfileContext,
  ISignUpContext,
  ITransactionContext,
} from '@/types/contexts';

export const AuthContext = createContext({} as IAuthContext);
export const AppContext = createContext({} as IAppContext);
export const SignUpContext = createContext({} as ISignUpContext);
export const MainTemplateContext = createContext({} as IMainTemplateContext);
export const CartContext = createContext({} as ICartContext);
export const ProfileContext = createContext({} as IProfileContext);
export const TransactionContext = createContext({} as ITransactionContext);
