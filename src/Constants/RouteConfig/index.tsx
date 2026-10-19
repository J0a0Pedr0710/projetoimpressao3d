import { type RouteObject } from 'react-router-dom';

import { About } from '@/features/about';
import { Home } from '@/features/home';
import { Profile } from '@/features/profile';
import { ConfirmRegistrationPage } from '@/features/register/pages/confirmRegistrationPage';
import { EmailConfirmPage } from '@/features/register/pages/emailConfirmPage';
import { EmailVerifiedPage } from '@/features/register/pages/emailVerifiedPage';
import { ForgotPasswordPage } from '@/features/register/pages/forgotPasswordPage';
import { RecoverPasswordPage } from '@/features/register/pages/recoverPasswordPage';
import { SignUpPage } from '@/features/register/pages/signUpPage';

export const routeConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
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
  { path: '/profile', element: <Profile /> },
];
