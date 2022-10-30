import React from 'react';
import { AuthJWT } from 'features/Authentication/thunk';
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
  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log('login');
    console.log(username, password);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AbWFpbC5jb20iLCJzdWIiOjEsImlhdCI6MTY0Nzg3NTY5MywiZXhwIjoxNjQ3ODc5MjkzfQ.yrPEqd3YEgmxwEXq3SFy33bhV2jcIKc8BMGZfwuWyHM'
    AuthJWT({ fetchData: { username, password }, token })
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
