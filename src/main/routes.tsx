import { DashboardLayout } from '@/shared/layouts/dashboard-layout';
import React from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = React.lazy(() => import('@/pages/home/HomeView'));
const UserList = React.lazy(() => import('@/pages/user/UserListView'));
const UserCreate = React.lazy(() => import('@/pages/user/UserCreateView'));
const UserEdit = React.lazy(() => import('@/pages/user/UserEditView'));

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UserList /> },
      { path: 'users/create', element: <UserCreate /> },
      { path: 'users/edit/:id', element: <UserEdit /> },
    ],
  },
];

export default appRoutes;
