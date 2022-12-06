import React, { forwardRef, ForwardRefExoticComponent, Ref } from 'react';
import { resetError } from '../../../entities/user/model/actions';
import { Login } from '../../../features/Authentication/thunk';
import { AuthForm } from '../../../features/Authentication/ui/AuthForm/AuthForm';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/store';
import { Button } from '../../../shared/ui/components/button/Button';
import { CloseIcon } from '../../../shared/ui/components/Icons/CloseIcon/Index';
import { NavItem } from '../../../shared/ui/components/NavLink/NavItem';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { ModalBackground } from '../Modal/ModalBackground';
import { ModalCloseButton } from '../Modal/ModalCloseButton';
import { Modal, ModalContents } from '../Modal/ModalContext';
import { ModalOpenButton } from '../Modal/ModalOpenButton';
import { StyledModalBackground } from '../Modal/style';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const Menu: ForwardRefExoticComponent<{ ref: Ref<HTMLDivElement> }> =
  forwardRef((props, ref) => {
    const { error } = useAppSelector((state) => state.user);
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

    const resetErrorHandle = () => dispatch(resetError());

    return (
      <>
        <MenuContainer ref={ref}>
          <FlexContainer justify='CENTER' space='NONE' flex align='CENTER'>
            <div>LOGO</div>
            <MenuItemsContainer space='LG' justify='CENTER' align='CENTER'>
              <NavItem to={'/'}>Products</NavItem>
              <NavItem to={'/category'}>Category</NavItem>
            </MenuItemsContainer>
            <FlexContainer space='MD' align='CENTER' justify='END'>
              <Modal>
                <ModalBackground>
                  {(props) => (
                    <StyledModalBackground
                      isOpen={props.isOpen}
                      onClick={() => {
                        props.setIsOpen();
                        resetErrorHandle();
                      }}
                    />
                  )}
                </ModalBackground>
                <ModalContents>
                  <ModalCloseButton>
                    {(props) => (
                      <CloseIcon
                        onClick={() => {
                          props.setIsOpen();
                          resetErrorHandle();
                        }}
                      />
                    )}
                  </ModalCloseButton>
                  <h2 style={{ textAlign: 'center' }}>Login</h2>
                  <AuthForm error={error} onSubmit={login} />
                </ModalContents>
                <ModalOpenButton>
                  {(props) => (
                    <Button
                      onClick={props.setIsOpen}
                      variant={COLORS.SECONDARY}
                    >
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
