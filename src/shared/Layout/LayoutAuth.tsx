import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useStickyHeader } from '../../shared/lib/hooks/useSticky';

import { MenuAuthorized } from '../../widgets/models/Menu/MenuAuthorized';

export const LayoutAuth: FC = () => {
  const { refHeader, refAfterHeader } = useStickyHeader();
  return (
    <>
      <MenuAuthorized ref={refHeader} />
      <div ref={refAfterHeader}>
        <Outlet />
      </div>
    </>
  );
};
