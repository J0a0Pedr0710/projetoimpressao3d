import { AppProvider } from '@/contexts/app';
import { AuthProvider } from '@/contexts/auth';
import { BillingAddressProvider } from '@/contexts/billingAddress';
import { ProfileProvider } from '@/contexts/profile';
import { SignUpProvider } from '@/contexts/signUp';
import type { IProvider } from '@/types/contexts';

export const Providers = ({ children }: IProvider) => {
  return (
    <AppProvider>
      <AuthProvider>
        <ProfileProvider>
          <BillingAddressProvider>
            <SignUpProvider>{children}</SignUpProvider>
          </BillingAddressProvider>
        </ProfileProvider>
      </AuthProvider>
    </AppProvider>
  );
};
