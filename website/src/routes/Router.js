import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import ForgotPassword from '../views/authentication/ForgotPassword';
import ResetPassword from '../views/authentication/ResetPassword';
import ConfirmEmail from '../views/authentication/ConfirmEmail';
import Plans from '../views/plans/Plans';
import PrivacyPolicy from '../views/termsandconditions/ThePrivacyPolicy';
import TermsAndConditions from '../views/termsandconditions/TermsAndConditions';
import Home from '../views/home/Home';

/* ***Layouts**** */
const FullLayout = lazy(() => import('../layouts/full/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank/BlankLayout'));

/* ****Pages***** */
const Error = lazy(() => import('../views/authentication/Error'));
const Register = lazy(() => import('../views/authentication/Register'));
const Login = lazy(() => import('../views/authentication/Login'));


const Router = [
  {
    path: '/',
    // element: <AuthGuard />, 
    children: [
      {
        path: '/',
        element: <FullLayout />,
        children: [
          // { index: true, element: <Navigate to="dashboard" /> }, // relative path
          { index: true, element: <Navigate to="/home" /> }, // relative path
          { path: '', element: <Home /> },
          { path: 'home', element: <Home /> },
          { path: 'plans', element: <Plans /> },
          { path: 'privacy-policy', element: <PrivacyPolicy /> },
          { path: 'terms-and-conditions', element: <TermsAndConditions /> },
          { path: '*', element: <Navigate to="/auth/404" /> },
        ]
      }
    ]
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'confirm-email', element: <ConfirmEmail /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];


const router = createBrowserRouter(Router);

export default router;
