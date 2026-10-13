import type { IProvider } from "contexts";
import { AppProvider } from "@/contexts/app";
import { AuthProvider } from "@/contexts/auth";


export const Providers = ({ children }: IProvider) => {
  return ( 
  <AppProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </AppProvider>
  );
};