import type { IAppContext, IAuthContext, ICartContext, IMainTemplateContext } from "contexts";
import { createContext } from "react";

export const AuthContext = createContext({} as IAuthContext);
export const AppContext = createContext({} as IAppContext);
export const MainTemplateContext = createContext({} as IMainTemplateContext);
export const CartContext = createContext({} as ICartContext);


