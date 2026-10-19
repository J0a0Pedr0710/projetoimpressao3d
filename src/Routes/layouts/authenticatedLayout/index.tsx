import { Outlet } from 'react-router-dom';

import { MainTemplateProvider } from '@/contexts/mainTemplate';
import { MainTemplate } from '@/features/shared/templates/mainTemplate';
import { RegisteredMiddlewares } from '@/routes/middlewares/registered';

export const AuthenticatedLayout = () => {
  return (
    <MainTemplateProvider>
      <RegisteredMiddlewares>
        <MainTemplate>
          <Outlet />
        </MainTemplate>
      </RegisteredMiddlewares>
    </MainTemplateProvider>
  );
};
