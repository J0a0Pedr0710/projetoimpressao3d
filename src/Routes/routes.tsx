import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routeConfig } from '@/constants/routeConfig';
import { Providers } from '@/contexts/Providers';

const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <Outlet />
      </Providers>
    ),
    children: routeConfig,
  },
]);

export const Routes = () => <RouterProvider router={router} />;