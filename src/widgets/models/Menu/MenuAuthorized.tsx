import React, { forwardRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../../../entities/cart/ui/CartIcon/CartIcon';
import { Logout, resetLoading } from '../../../entities/user/model/actions';
import { useSetAnimationQuantity } from '../../../shared/lib/hooks/useSticky';
import {
  useAppDispatch,
  useAppSelector
} from '../../../shared/lib/store/store';
import { Avatar } from '../../../shared/ui/components/Avatar/Avatar';
import { Button } from '../../../shared/ui/components/button/Button';
import { NavItem } from '../../../shared/ui/components/NavLink/NavItem';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SIZE,
  SPACING_MAP
} from '../../../shared/ui/constants/style';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const MenuAuthorized = forwardRef((props, ref) => {
  const { essence: cartProduct } = useAppSelector((state) => state.cart);
  const { essence: user } = useAppSelector((state) => state.user);

  const quantityProduct = useMemo(
    () => Object.keys(cartProduct).length,
    [cartProduct]
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    navigate('/');
    dispatch(Logout());
    setTimeout(() => {
      dispatch(resetLoading());
      return null;
    }, 500);
  };

  const { activatedAnimation } = useSetAnimationQuantity(quantityProduct)

  return (
    <>
      {user &&
        <MenuContainer ref={ref}>
          <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
            <div>LOGO</div>
            <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
              <NavItem to={'/'}>Products</NavItem>
              <NavItem to={'/category'}>Category</NavItem>
              <NavItem to={'/cart'}>
                <CartIcon
                  activatedAnimation={activatedAnimation}
                  widthIcon={'25px'}
                  heightIcon={'25px'}
                >
                  {quantityProduct}
                </CartIcon>
              </NavItem>
            </MenuItemsContainer>
            <FlexContainer space="MD" align="CENTER" justify="END">
              <Avatar src={user.avatar} />
              <div>{user.name}</div>
              <Button
                onClick={logout}
                variant={COLORS.SECONDARY}
                size={SIZE.SMALL}
              >
                Logout
              </Button>
            </FlexContainer>
          </FlexContainer>
        </MenuContainer>
      }
    </>
  );
});
