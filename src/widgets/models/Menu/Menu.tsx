import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login, SignUp } from '../../../features/Authentication/thunk';
import { RootState } from '../../../shared/lib/store/store';
import { AuthForm } from '../../../shared/ui/components/AuthForm/AuthForm';
import { Button } from '../../../shared/ui/components/button/Button';
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

  const signUp = ({
    name,
    password,
    email,
  }: {
    name: string;
    password: string;
    email: string;
  }) => {
    dispatch(SignUp({ email, password, username }));
  };

  return (
    <MenuContainer>
      <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
        <div>LOGO</div>
        <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
          <span>Products</span>
          <span>Category</span>
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
            openButton={<span style={{ cursor: 'pointer' }}>Sign in</span>}
          />
          <AuthModal
            modalContent={
              <>
                <h1 style={{ textAlign: 'center' }}>Sign up</h1>
                <AuthForm
                  isSinUpForm={true}
                  status={loading}
                  onSubmit={signUp}
                  submitButton={
                    <Button variant={COLORS.PRIMARY}>Sign up</Button>
                  }
                />
              </>
            }
            openButton={<Button variant={COLORS.SECONDARY}>Sign up</Button>}
          />
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
