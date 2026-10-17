import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routeConfig } from '@/constants/RouteConfig';
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
