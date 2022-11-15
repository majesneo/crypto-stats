import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { MenuAuthorized } from '../../widgets/models/Menu/MenuAuthorized';

export const LayoutAuth: FC = () => {
  return (
    <>
      <MenuAuthorized />
      <Outlet />
    </>
  );
};
