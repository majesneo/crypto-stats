import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useStickyHeader } from '../../shared/lib/hooks/useSticky';
import { Menu } from '../../widgets/models/Menu/Menu';

export const LayoutDefault: FC = () => {
  const { refHeader, refAfterHeader } = useStickyHeader();
  return (
    <>
      <Menu ref={refHeader} />
      <div ref={refAfterHeader}>
        <Outlet />
      </div>
    </>
  );
};
