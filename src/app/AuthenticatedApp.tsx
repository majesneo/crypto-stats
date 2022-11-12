import React, { FC } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Cart } from '../pages/Cart/Cart';
import { Products } from '../pages/Product/Products';
import { LayoutDefault } from '../shared/Layout/LayoutDafault';

export const AuthenticatedApp: FC = () => {
  return (
    <BrowserRouter>
      <LayoutDefault>
        <Routes >
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<Navigate to="/" replace />} />
          {/* <Route path="*" /> */}
        </Routes>
      </LayoutDefault>
    </BrowserRouter>
  );
};
