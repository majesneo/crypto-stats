import styled from 'styled-components';
import { StyledModalBackgroundI } from './ModalBackground';
import { StyledModalContentI } from './ModalContent';

export const StyledModalBackground = styled.div<StyledModalBackgroundI>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background-color: rgb(3 8 13 / 60%);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const StyledModalContent = styled.div<StyledModalContentI>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: fit-content;
  height: fit-content;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 2rem;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
`;
