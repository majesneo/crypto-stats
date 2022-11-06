import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../../../entities/user/model/actions';
import { RootState } from '../../../shared/lib/store/store';
import { Avatar } from '../../../shared/ui/components/Avatar/Avatar';
import { Button } from '../../../shared/ui/components/button/Button';
import { CartIcon } from '../../../shared/ui/components/Icons/CartIcon/Index';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SIZE,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const MenuAuthorized = () => {
  const {
    essence: { name, avatar },
  } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout())
  }

  return (
    <MenuContainer>
      <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
        <div>LOGO</div>
        <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
          <span>Products</span>
          <span>Category</span>
          <CartIcon />
        </MenuItemsContainer>
        <FlexContainer space="MD" align="CENTER" justify="END">
          <Avatar src={avatar} />
          <div>{name}</div>
          <Button onClick={logout} variant={COLORS.SECONDARY} size={SIZE.SMALL} >Logout</Button>
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
