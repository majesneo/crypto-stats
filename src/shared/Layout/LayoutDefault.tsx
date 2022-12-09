import React, { FC, Ref } from 'react';
import { Outlet } from 'react-router-dom';
import { useSticky } from '../../shared/lib/hooks/useSticky';

import { Menu } from '../../widgets/models/Menu/Menu';

export const LayoutDefault: FC = () => {
  const { isSticky, headerRef } = useSticky<HTMLDivElement>();
  return (
    <>
      <div style={{ height: '10px' }} />
      <Menu isSticky={isSticky} ref={headerRef as Ref<HTMLDivElement>} />
      <div>
        <Outlet />
      </div>
    </>
  );
};
