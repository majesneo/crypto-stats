import styled from 'styled-components';
import { DANGER_TEXT_COLOR } from '../../shared/ui/constants/style';

export const ErrorPageContainer = styled.div`
  color: ${DANGER_TEXT_COLOR};
  height: '100vh';
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
`;
