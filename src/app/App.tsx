import React from 'react';
// eslint-disable-next-line import/no-internal-modules
import '../shared/lib/reset-CSS/rest.css';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../pages/PageError/ErrorPage';
import { AppRoutes } from '../shared/lib/AppRoutes/AppRoutes';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <AppRoutes />
    </ErrorBoundary>
  );
};
