import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routeConfig } from '../Constants/RouteConfig';
import { Providers } from '../Contexts/Providers';

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