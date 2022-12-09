import React, { FC, Ref } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuAuthorized } from '../../widgets/models/Menu/MenuAuthorized';
import { useSticky } from '../lib/hooks/useSticky';

export const LayoutAuth: FC = () => {
  const { headerRef, isSticky } = useSticky();

  return (
    <>
      <div style={{ height: '10px' }} />
      <MenuAuthorized
        ref={headerRef as Ref<HTMLDivElement>}
        isSticky={isSticky}
      />
      <div>
        <Outlet />
      </div>
    </>
  );
};
