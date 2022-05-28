import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

export const Layout = () => (
  <>
    <Navigation />
    <Suspense fallback="Loading...">
      <Outlet />
    </Suspense>
  </>
);
