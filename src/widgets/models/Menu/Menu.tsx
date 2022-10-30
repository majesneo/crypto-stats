import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../../../features/Authentication/thunk';
import { RootState } from '../../../shared/lib/store/store';
import { AuthForm } from '../../../shared/ui/components/AuthForm/AuthForm';
import { Button } from '../../../shared/ui/components/button/Button';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { ModalBackground } from '../Modal/ModalBackground';
import { Modal, ModalContents, ModalOpenButton } from '../Modal/ModalContext';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const Menu = () => {
  const { loading } = useSelector((state: RootState) => state.product);

  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    Login({ email: username, password });
  };

  return (
    <MenuContainer>
      <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
        <div>LOGO</div>
        <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
          <span>Products</span>
          <span>Features</span>
        </MenuItemsContainer>
        <FlexContainer space="MD" align="CENTER" justify="END">
          <Modal>
            <ModalOpenButton>
              <span>Sign in</span>
            </ModalOpenButton>
            <ModalBackground />
            <ModalContents>
              <h2>Login</h2>
              <AuthForm
                status={loading}
                onSubmit={login}
                submitButton={<Button variant={COLORS.PRIMARY}>Login</Button>}
              />
            </ModalContents>
            <ModalOpenButton>
              <Button variant={COLORS.SECONDARY}>Sign up</Button>
            </ModalOpenButton>
          </Modal>
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
