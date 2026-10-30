import { type RouteObject } from 'react-router-dom';

import {
  profileAddresses,
  profileAddressRouteHandle,
  profilePersonalDataRouteHandle,
  profileRouteHandle,
} from '@/constants/mainTemplateRouteHandles';
import { About } from '@/features/about';
import { Home } from '@/features/home';
import { AddProfilePage } from '@/features/profile/pages/addProfilePage';
import { ProfileAddressPageEdit } from '@/features/profile/pages/profileAddressPageEdit';
import { ProfilePage } from '@/features/profile/pages/profilePage';
import { ProfilePersonalDataPage } from '@/features/profile/pages/profilePersonalDataPage';
import { RegisterAddresses } from '@/features/profile/pages/registeredAddresses';
import { ConfirmRegistrationPage } from '@/features/register/pages/confirmRegistrationPage';
import { EmailConfirmPage } from '@/features/register/pages/emailConfirmPage';
import { EmailVerifiedPage } from '@/features/register/pages/emailVerifiedPage';
import { ForgotPasswordPage } from '@/features/register/pages/forgotPasswordPage';
import { RecoverPasswordPage } from '@/features/register/pages/recoverPasswordPage';
import { SignInPage } from '@/features/register/pages/signInPage';
import { SignUpPage } from '@/features/register/pages/signUpPage';
import { AuthenticatedLayout } from '@/routes/layouts/authenticatedLayout';

export const routeConfig: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: '/sobre', element: <About /> },

  {
    path: '/profile',
    element: <AuthenticatedLayout />,
    handle: profileRouteHandle,
    children: [
      { index: true, element: <ProfilePage /> },
      {
        path: 'addAddress',
        element: <AddProfilePage />,
        handle: profileAddressRouteHandle,
      },
      {
        path: 'address/:addressId',
        element: <ProfileAddressPageEdit />,
        handle: profileAddressRouteHandle,
      },
      {
        path: 'edit',
        element: <ProfilePersonalDataPage />,
        handle: profilePersonalDataRouteHandle,
      },
      {
        path: 'addresses',
        element: <RegisterAddresses />,
        handle: profileAddresses,
      },
    ],
  },

  {
    path: '/forgot-password',
    children: [
      { index: true, element: <ForgotPasswordPage /> },
      { path: 'email-confirm', element: <EmailConfirmPage /> },
    ],
  },

  {
    path: '/sign-up',
    children: [
      { index: true, element: <SignUpPage /> },
      { path: 'confirm', element: <ConfirmRegistrationPage /> },
      { path: 'email-verified', element: <EmailVerifiedPage /> },
    ],
  },

  { path: '/sign-in', element: <SignInPage /> },

  { path: '/forgotPassword', element: <RecoverPasswordPage /> },
];
