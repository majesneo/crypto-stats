import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/lib/store/store';
import { AuthJWT } from './thunk';


export const useAuth = () => {
  const dispatch = useDispatch()
  const { loading, essence: user, token } = useSelector((state: RootState) => state.user);

  console.log(token, 'token');

  useEffect(() => {
    if (token) dispatch(AuthJWT(token))
  }, [token, dispatch]);

  console.log(user, 'user');
  console.log(loading, 'loading');
  return { user, loading }
};
