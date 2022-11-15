import React, { FC } from 'react';
import { ErrorPageContainer } from './style';

const ErrorPage: FC<{ error: Error }> = ({ error }: { error: Error }) => {
  return (
    <ErrorPageContainer>
      <p>Try refreshing the app.</p>
      <pre> {error.message} </pre>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
