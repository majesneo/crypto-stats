import React, { FC } from 'react';
import { Spinner } from './Spinner';
import { FullPageSpinnerStyle } from './style';

export const FullPageSpinner: FC = () => {
  return (
    <FullPageSpinnerStyle>
      <Spinner />
    </FullPageSpinnerStyle>
  );
};
