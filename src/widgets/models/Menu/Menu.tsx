import React, { forwardRef } from 'react';
import { resetError } from '../../../entities/user/model/actions';
import { Login } from '../../../features/Authentication/thunk';
import { AuthForm } from '../../../features/Authentication/ui/AuthForm/AuthForm';
import { ERROR } from '../../../shared/constants/constants';
import { useResetErrorWithDelay } from '../../../shared/lib/hooks/useResetErrorWithDelay';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/store';
import { Button } from '../../../shared/ui/components/button/Button';
import Error from '../../../shared/ui/components/Error/Error';
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

export const Menu = forwardRef((props, ref) => {
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useResetErrorWithDelay(error, ERROR.LOGIN, resetError, 4);

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
    <>
      <MenuContainer ref={ref}>
        <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
          <div>LOGO</div>
          <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
            <NavItem to={'/'}>Products</NavItem>
            <NavItem to={'/category'}>Category</NavItem>
          </MenuItemsContainer>
          <FlexContainer space="MD" align="CENTER" justify="END">
            <Modal>
              <ModalContents autoOpen={Boolean(error)}>
                {!error ? (
                  <h2 style={{ textAlign: 'center' }}>Login</h2>
                ) : (
                  <Error value={Boolean(error)}>
                    <h1 style={{ textAlign: 'center' }}>{error}</h1>
                  </Error>
                )}
                <AuthForm onSubmit={login} />
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
    </>
  );
});
