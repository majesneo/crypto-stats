import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../../../features/Authentication/hooks';
import { Cart } from '../../../pages/Cart/Cart';
import { Products } from '../../../pages/Product/Products';
import { STATUS } from '../../../shared/constants/constants';
import { LayoutAuth } from '../../../shared/Layout/LayoutAuth';
import { Spinner } from '../../../shared/ui/components/Spinner/Spinner';
import { LayoutDefault } from '../../Layout/LayoutDefault';

export const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading === STATUS.LOADING) {
    return <Spinner isFullWidth />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {user && (
          <Route element={<LayoutAuth />}>
            <Route path="/" element={<Products />} />
            <Route path="/category" element={<Navigate to="/" replace />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        )}
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Products />} />
          <Route path="/category" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
