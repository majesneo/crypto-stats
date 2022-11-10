import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../../features/Authentication/thunk';
import { RootState } from '../../../shared/lib/store/store';
import { AuthForm } from '../../../shared/ui/components/AuthForm/AuthForm';
import { Button } from '../../../shared/ui/components/button/Button';
import { NavItem } from '../../../shared/ui/components/NavLink/NavItem';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP
} from '../../../shared/ui/constants/style';
import { AuthModal } from '../AuthModal/AuthModal';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const Menu = () => {
  const { loading } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const login = ({ email, password }: { email: string; password: string }) => {
    dispatch(Login({ email, password }));
  };

  return (
    <MenuContainer>
      <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
        <div>LOGO</div>
        <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
          <NavItem to={'/'}>Products</NavItem>
          <NavItem to={'/category'}>Category</NavItem>
        </MenuItemsContainer>
        <FlexContainer space="MD" align="CENTER" justify="END">
          <AuthModal
            modalContent={
              <>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <AuthForm
                  status={loading}
                  onSubmit={login}
                  submitButton={<Button variant={COLORS.PRIMARY}>Login</Button>}
                />
              </>
            }
            openButton={<Button variant={COLORS.SECONDARY}>Sign in</Button>}
          />
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
