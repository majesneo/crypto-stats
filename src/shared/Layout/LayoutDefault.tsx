import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../widgets/models/Menu/Menu';

export const LayoutDefault: FC = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
