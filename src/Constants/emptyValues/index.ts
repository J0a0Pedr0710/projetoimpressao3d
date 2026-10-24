import type { ISignIn } from '@/types/props';

export const emptyUser = {
  accessType: '',
  email: '',
  exp: 0,
  firstName: '',
  lastName: '',
  iat: 0,
  isActive: false,
  isCompany: false,
  permissions: [],
  isMain: false,
  registerNumber: '',
  userId: '',
};

export const emptySignIn: ISignIn = {
  email: '',
  password: '',
};
