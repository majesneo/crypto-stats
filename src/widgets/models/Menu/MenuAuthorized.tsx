import React, { forwardRef, ForwardRefExoticComponent, Ref } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAnimationQuantity } from '../../../entities/cart/model/hooks';
import CartIcon from '../../../entities/cart/ui/CartIcon/CartIcon';
import { Logout, resetLoading } from '../../../entities/user/model/actions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/lib/store/store';
import { Avatar } from '../../../shared/ui/components/Avatar/Avatar';
import { Button } from '../../../shared/ui/components/button/Button';
import { NavItem } from '../../../shared/ui/components/NavLink/NavItem';
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

export const MenuAuthorized: ForwardRefExoticComponent<{
  ref: Ref<HTMLDivElement>;
  isSticky: boolean;
}> = forwardRef((props, ref) => {
  const { essence: cartProduct } = useAppSelector((state) => state.cart);
  const { essence: user } = useAppSelector((state) => state.user);
  const quantityProduct = Object.values(cartProduct).reduce(
    (acc, curr) => acc + curr.amount,
    0
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

  return (
    <>
      {user && (
        <MenuContainer isSticky={props.isSticky} ref={ref}>
          <FlexContainer justify='CENTER' space='NONE' flex align='CENTER'>
            <div>LOGO</div>
            <MenuItemsContainer space='LG' justify='CENTER' align='CENTER'>
              <NavItem to={'/'}>Products</NavItem>
              <NavItem to={'/category'}>Category</NavItem>
              <NavItem to={'/cart'}>
                <CartIcon widthIcon={'25px'} heightIcon={'25px'}>
                  {quantityProduct}
                </CartIcon>
              </NavItem>
            </MenuItemsContainer>
            <FlexContainer space='MD' align='CENTER' justify='END'>
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
      )}
    </>
  );
});
