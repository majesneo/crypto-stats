import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsNotAuth } from '../pages/Product/ProductsNotAuth';

export const UnauthenticatedApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<ProductsNotAuth />} />
        {/* <Route path="*" /> */}
      </Routes>
    </BrowserRouter>
  );
};
