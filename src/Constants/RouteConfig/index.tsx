import type { RouteObject } from 'react-router-dom';

import { About } from '@/features/about';
import { Home } from '@/features/home';
import { Profile } from '@/features/profile';

export const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/Sobre', element: <About /> },
  { path: '/Profile', element: <Profile /> },
];
