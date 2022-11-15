import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../shared/lib/store/store';

import { AuthJWT } from './thunk';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const {
    loading,
    essence: user,
    token,
  } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token) dispatch(AuthJWT(token));
  }, [token, dispatch]);

  return { user, loading };
};
