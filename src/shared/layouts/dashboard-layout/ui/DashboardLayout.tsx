
import Toast from '@/components/toast/ui/Toast';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import PageLoader from './PageLoader';

export function DashboardLayout() {
  return (
    <>
      <Header />

      <Box sx={{ margin: 4 }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Box>

      <Toast />
    </>
  );
}