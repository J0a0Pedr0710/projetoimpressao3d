import { type RouteObject } from 'react-router-dom';

import {
  profileAddressRouteHandle,
  profilePersonalDataRouteHandle,
  profileRouteHandle,
} from '@/constants/mainTemplateRouteHandles';
import { About } from '@/features/about';
import { Home } from '@/features/home';
import { ProfileAddressPageEdit } from '@/features/profile/pages/profileAddressPageEdit';
import { ProfilePersonalDataPage } from '@/features/profile/pages/profilePersonalDataPage';
import { ProfilePage } from '@/features/profile/pages/profilePage';
import { ConfirmRegistrationPage } from '@/features/register/pages/confirmRegistrationPage';
import { EmailConfirmPage } from '@/features/register/pages/emailConfirmPage';
import { EmailVerifiedPage } from '@/features/register/pages/emailVerifiedPage';
import { ForgotPasswordPage } from '@/features/register/pages/forgotPasswordPage';
import { RecoverPasswordPage } from '@/features/register/pages/recoverPasswordPage';
import { SignInPage } from '@/features/register/pages/signInPage';
import { SignUpPage } from '@/features/register/pages/signUpPage';
import { AuthenticatedLayout } from '@/routes/layouts/authenticatedLayout';

export const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/sign-in', element: <SignInPage /> },
  {
    path: '/forgot-password',
    children: [
      { index: true, element: <ForgotPasswordPage /> },
      { path: 'email-confirm', element: <EmailConfirmPage /> },
    ],
  },
  { path: '/forgotPassword', element: <RecoverPasswordPage /> },
  {
    path: '/sign-up',
    children: [
      { index: true, element: <SignUpPage /> },
      { path: 'confirm', element: <ConfirmRegistrationPage /> },
      { path: 'email-verified', element: <EmailVerifiedPage /> },
    ],
  },

  { path: '/sobre', element: <About /> },
  {
    path: '/profile',
    element: <AuthenticatedLayout />,
    handle: profileRouteHandle,
    children: [
      { index: true, element: <ProfilePage /> },
      {
        path: 'address',
        element: <ProfileAddressPageEdit />,
        handle: profileAddressRouteHandle,
      },
      {
        path: 'edit',
        element: <ProfilePersonalDataPage />,
        handle: profilePersonalDataRouteHandle,
      },
    ],
  },
];
