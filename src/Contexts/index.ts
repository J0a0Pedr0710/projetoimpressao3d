import { useContext } from 'react';

import {
  AppContext,
  AuthContext,
  CartContext,
  MainTemplateContext,
  ProfileContext,
  TransactionContext,
} from '@/constants/contexts';

const useApp = () => useContext(AppContext);
const useAuth = () => useContext(AuthContext);
const useMainTemplateContext = () => useContext(MainTemplateContext);
const useCart = () => useContext(CartContext);
const useProfile = () => useContext(ProfileContext);
const useTransactionContext = () => useContext(TransactionContext);

export { useApp, useAuth, useMainTemplateContext, useCart, useProfile, useTransactionContext };
