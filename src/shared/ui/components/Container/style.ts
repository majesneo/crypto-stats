import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/style';
import { ContainerProps } from './Container';

export const StyledContainer = styled.div<ContainerProps>`
  padding: 20px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
`;
