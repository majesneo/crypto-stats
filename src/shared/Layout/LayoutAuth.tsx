import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuAuthorized } from '../../widgets/models/Menu/MenuAuthorized';
import { useStickyHeader } from '../lib/hooks/useSticky';

export const LayoutAuth: FC = () => {
  const { refHeader, refAfterHeader } = useStickyHeader<
    HTMLDivElement,
    HTMLDivElement
  >();
  return (
    <>
      <MenuAuthorized ref={refHeader} />
      <div ref={refAfterHeader}>
        <Outlet />
      </div>
    </>
  );
};
