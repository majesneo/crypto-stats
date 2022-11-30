import styled from 'styled-components';
import { DANGER_TEXT_COLOR } from '../../constants/style';

export const StyledError = styled.div`
  color: ${DANGER_TEXT_COLOR};
  &::first-letter {
    text-transform: capitalize;
  }
`;
