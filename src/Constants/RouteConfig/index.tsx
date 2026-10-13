import { Navigate, type RouteObject } from 'react-router-dom';

import { About } from '@/features/about';
import { Home } from '@/features/home';
import { Profile } from '@/features/profile';

export const routeConfig: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', element: <Home /> },
  { path: '/sobre', element: <About /> },
  { path: '/profile', element: <Profile /> },
];
