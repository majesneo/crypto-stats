import { FaSpinner } from 'react-icons/fa';
import styled, { css, keyframes } from 'styled-components';
import { ISpinner } from './Spinner';

const setFullPageStyle = () => {
  return css`
    font-size: 4em;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

const setFullContent = () => {
  return css`
    position: absolute;
    font-size: 4em;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const ContainerSpinner = styled.div<ISpinner>`
  ${({ isFullWidth }) => isFullWidth && setFullPageStyle()}
  ${({ isFullContent }) => isFullContent && setFullContent()}
`;

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const setAnimationSpinner = () => {
  return css`
    animation: ${spin} 1s linear infinite;
  `;
};

export const StyledSpinner = styled(FaSpinner)`
  ${setAnimationSpinner};
`;
