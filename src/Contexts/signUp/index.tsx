import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { ISignUpContext } from '@/types/contexts';

import { SignUpContext } from '@/constants/contexts';

export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);

  const setUserEmail = (email: string) => {
    if (email) {
      sessionStorage.setItem('userEmailForConfirmation', email);
      setEmail(email);
    }
  };

  const clearUserEmail = () => {
    setEmail(null);
    sessionStorage.removeItem('userEmailForConfirmation');
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmailForConfirmation');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const value: ISignUpContext = {
    userEmailForConfirmation: email,
    setUserEmail,
    clearUserEmail,
  };

  return <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>;
};
