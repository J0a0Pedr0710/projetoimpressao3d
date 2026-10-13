import { About } from "@/features/about";
import { Home } from "@/features/home";
import type { RouteObject } from "react-router-dom";


export const routeConfig: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/Sobre", element: <About /> },
];
