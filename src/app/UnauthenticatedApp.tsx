import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProductsNotAuth } from '../pages/Product/ProductsNotAuth';

export const UnauthenticatedApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsNotAuth />} />
        <Route path="/category" element={<Navigate to="/" replace />} />
        {/* <Route path="*" /> */}
      </Routes>
    </BrowserRouter>
  );
};
