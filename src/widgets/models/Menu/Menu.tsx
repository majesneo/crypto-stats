import React from 'react';
import { Login } from '../../../features/Authentication/thunk';
import { AuthForm } from '../../../features/Authentication/ui/AuthForm/AuthForm';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/store';
import { Button } from '../../../shared/ui/components/button/Button';
import { NavItem } from '../../../shared/ui/components/NavLink/NavItem';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { Modal, ModalContents, ModalOpenButton } from '../Modal/ModalContext';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const Menu = () => {
  const { loading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const login = ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
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
          <Modal>
            <ModalContents>
              <h2 style={{ textAlign: 'center' }}>Login</h2>
              <AuthForm status={loading}>
                {(props) => (
                  <Button
                    onClick={() => login(props.login())}
                    type="submit"
                    variant={COLORS.PRIMARY}
                  >
                    Login
                  </Button>
                )}
              </AuthForm>
            </ModalContents>
            <ModalOpenButton>
              {(props) => (
                <Button onClick={props.setIsOpen} variant={COLORS.SECONDARY}>
                  Sign in
                </Button>
              )}
            </ModalOpenButton>
          </Modal>
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
