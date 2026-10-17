import { type RouteObject } from 'react-router-dom';

import { About } from '@/features/about';
import { Home } from '@/features/home';
import { Profile } from '@/features/profile';
import { SignUp } from '@/features/signUp/page';

export const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/sobre', element: <About /> },
  { path: '/profile', element: <Profile /> },
  { path: '/sign-up', element: <SignUp /> },
];
