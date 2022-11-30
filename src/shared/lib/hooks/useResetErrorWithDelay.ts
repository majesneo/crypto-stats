import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { ERROR } from 'shared/constants/constants';
import { useAppDispatch } from '../store/store';

export function useResetErrorWithDelay(
  stateError: string,
  currentError: ERROR,
  resetErrorAction: ActionCreatorWithoutPayload,
  delayResetSecond: number
) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      if (stateError.includes(currentError)) {
        dispatch(resetErrorAction());
      }
    }, delayResetSecond * 1000);
  }, []);
}
