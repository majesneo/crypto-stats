import styled, { css } from 'styled-components';
import {
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { MenuI, MenuItemsContainerProps } from './Menu';

export const MenuItemsContainer = styled.div<MenuItemsContainerProps>`
  --space: ${({ space }) => SPACING_MAP[space] ?? SPACING_MAP.LG};
  display: flex;
  flex-wrap: wrap;
  gap: var(--space);

  justify-content: ${({ justify }) =>
    JUSTIFY_ALIGN_MAP[justify] ?? JUSTIFY_ALIGN_MAP.START};
  align-items: ${({ align }) =>
    JUSTIFY_ALIGN_MAP[align] ?? JUSTIFY_ALIGN_MAP.START};
`;

const sticky = () => {
  return css`
    position: sticky;
    top: -1px;
    transition: 0.2s ease-out;
    width: 100%;
    background-color: white;
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  `;
};

export const MenuContainer = styled.div<MenuI>`
  ${({ isSticky }) => (isSticky ? sticky() : '')};
  padding: ${SPACING_MAP.MD};
  font-size: 20px;
`;

export const FlexContainer = styled(MenuItemsContainer)`
  flex-wrap: wrap;
  min-width: fit-content;
  padding: 0 10px;
  ${({ flex }) => flex && `> *  { flex: 1 }`}
`;
