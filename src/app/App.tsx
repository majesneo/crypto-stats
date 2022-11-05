import React from 'react';
import '../shared/lib/reset-CSS/rest.css';

import { useAuth } from '../features/Authentication/hooks';
import { STATUS } from '../shared/constants/constants';
import { Spinner } from '../shared/ui/components/Spinner/Spinner';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnauthenticatedApp } from './UnauthenticatedApp';


export const App = () => {
  const { user, loading } = useAuth()

  if (loading === STATUS.LOADING) {
    return <Spinner isFullWidth />
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
};
