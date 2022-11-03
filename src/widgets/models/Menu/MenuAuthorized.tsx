import React from 'react';
import {
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP
} from '../../../shared/ui/constants/style';
import { FlexContainer, MenuContainer, MenuItemsContainer } from './style';

export interface MenuItemsContainerProps {
  space: keyof typeof SPACING_MAP;
  justify: keyof typeof JUSTIFY_ALIGN_MAP;
  align: keyof typeof JUSTIFY_ALIGN_MAP;
  flex?: boolean;
}

export const MenuAuthorized = () => {

  return (
    <MenuContainer>
      <FlexContainer justify="CENTER" space="NONE" flex align="CENTER">
        <div>LOGO</div>
        <MenuItemsContainer space="LG" justify="CENTER" align="CENTER">
          <span>Products</span>
          <span>Features</span>
        </MenuItemsContainer>
        <FlexContainer space="MD" align="CENTER" justify="END">
          <div>user name</div>
        </FlexContainer>
      </FlexContainer>
    </MenuContainer>
  );
};
