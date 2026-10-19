import type { IProvider } from 'contexts';

import { AppProvider } from '@/contexts/app';
import { AuthProvider } from '@/contexts/auth';
import { SignUpProvider } from '@/contexts/signUp';

export const Providers = ({ children }: IProvider) => {
  return (
    <AppProvider>
      <AuthProvider>
        <SignUpProvider>{children}</SignUpProvider>
      </AuthProvider>
    </AppProvider>
  );
};
