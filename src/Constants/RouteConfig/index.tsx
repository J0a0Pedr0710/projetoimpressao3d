import type { RouteObject } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";

export const routeConfig: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/Sobre", element: <About /> },
];
