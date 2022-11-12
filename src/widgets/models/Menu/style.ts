import styled from 'styled-components';
import {
  JUSTIFY_ALIGN_MAP,
  SPACING_MAP,
} from '../../../shared/ui/constants/style';
import { MenuItemsContainerProps } from './Menu';

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

export const MenuContainer = styled.div`
  padding: ${SPACING_MAP.MD};
  font-size: 20px;
`;

export const FlexContainer = styled(MenuItemsContainer)`
  flex-wrap: wrap;
  min-width: fit-content;
  padding: 0 10px;
  ${({ flex }) => flex && `> *  { flex: 1 }`}
`;
