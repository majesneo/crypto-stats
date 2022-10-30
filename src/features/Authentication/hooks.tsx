import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { STATUS } from '../../shared/constants/constants';
import { getItem } from '../../shared/lib/localStorage';
import { RootState } from '../../shared/lib/store/store';
import { Spinner } from '../../shared/ui/components/Spinner/Spinner';
import { LOCAL_STORAGE_KEY_TOKEN } from './constants';
import { AuthJWT } from './thunk';

const checkAuth = () => {
  const token = getItem(LOCAL_STORAGE_KEY_TOKEN);
  if (token) {
    const user = AuthJWT(token);
    console.log(user, 'user');
    return user;
  } else {
    return null;
  }
};

export const useAuth = () => {

  useEffect(() => {
    checkAuth();
  }, []);

  const { loading, essence } = useSelector((state: RootState) => state.user);

  if (loading === STATUS.LOADING || STATUS.IDLE) {
    return <Spinner isFullWidth />;
  } else {
    return { user: essence }
  }
};
