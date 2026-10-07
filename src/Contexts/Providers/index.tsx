import type { IProvider } from "contexts";

import { AppProvider } from "@/contexts/app";
import { AuthProvider } from "@/contexts/auth";
import { CalculatorProvider } from "@/contexts/calculator";
import { CarrierProvider } from "@/contexts/carriers";
import { CartProvider } from "@/contexts/cart";
import { ClientTransactionProvider } from "@/contexts/clientTransactions";
import { ClientProvider } from "@/contexts/clients";
import { DashboardProvider } from "@/contexts/dashboard";
import { PostageProvider } from "@/contexts/postage";
import { PostageFormProvider } from "@/contexts/postageForm";
import { ProfileProvider } from "@/contexts/profile";
import { RepresentativeProvider } from "@/contexts/representative";
import { ShippingProfileProvider } from "@/contexts/shippingProfile";
import { SignUpProvider } from "@/contexts/signUp";
import { PostaquiTourProvider } from "@/contexts/tour";
import { TransactionProvider } from "@/contexts/transactions";

export const Providers = ({ children }: IProvider) => {
  return (
    <AppProvider>
      <AuthProvider>
        <ProfileProvider>
          <SignUpProvider>
            <PostageProvider>
              <CartProvider>
                <RepresentativeProvider>
                  <CalculatorProvider>
                    <PostageFormProvider>
                      <PostaquiTourProvider>
                        <TransactionProvider>
                          <ClientTransactionProvider>
                            <DashboardProvider>
                              <ClientProvider>
                                <CarrierProvider>
                                  <ShippingProfileProvider>
                                    {children}
                                  </ShippingProfileProvider>
                                </CarrierProvider>
                              </ClientProvider>
                            </DashboardProvider>
                          </ClientTransactionProvider>
                        </TransactionProvider>
                      </PostaquiTourProvider>
                    </PostageFormProvider>
                  </CalculatorProvider>
                </RepresentativeProvider>
              </CartProvider>
            </PostageProvider>
          </SignUpProvider>
        </ProfileProvider>
      </AuthProvider>
    </AppProvider>
  );
};
