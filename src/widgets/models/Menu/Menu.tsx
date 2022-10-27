import React from 'react';
import { Button } from '../../../shared/ui/components/button/Button';
import {
  COLORS,
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify?: JUSTIFY_ALIGN_MAP;
  align?: JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const Menu = () => {
  return (
    <MenuContainer>
      <FlexContainer space="NONE" flex align={JUSTIFY_ALIGN_MAP.CENTER}>
        <div>LOGO</div>
        <MenuItemsContainer
          space="LG"
          justify={JUSTIFY_ALIGN_MAP.CENTER}
          align={JUSTIFY_ALIGN_MAP.CENTER}
        >
          <span>Products</span>
          <span>Features</span>
        </MenuItemsContainer>
        <FlexContainer
          space="MD"
          align={JUSTIFY_ALIGN_MAP.CENTER}
          justify={JUSTIFY_ALIGN_MAP.END}
        >
          <span>Sign in</span>
          <Button variant={COLORS.SECONDARY}>Sign up</Button>
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
