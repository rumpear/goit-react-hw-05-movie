import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Loader } from '../ui/Loader';

export const Layout = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);
