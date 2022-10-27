import styled from 'styled-components';
import { SPACING_MAP } from '../../../../shared/ui/constants/style';
import { StyledGridContainerProps } from './ProductContainer';

export const StyledGridContainer = styled.div<StyledGridContainerProps>`
  display: grid;
  gap: ${(props) => SPACING_MAP[props.spacing] ?? SPACING_MAP.LG};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth}, 100%), 1fr)
  );
`;
