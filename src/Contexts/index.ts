import { AppContext, AuthContext, CartContext, MainTemplateContext } from "@/constants/contexts";
import { use } from "react";

const useApp = () => use(AppContext);
const useAuth = () => use(AuthContext);
const useMainTemplateContext = () => use(MainTemplateContext);
const useCart = () => use(CartContext);



export { useApp, useAuth, useMainTemplateContext, useCart };