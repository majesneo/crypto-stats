import styled, { css, keyframes } from 'styled-components';

export const FullPageSpinnerStyle = styled.div`
  font-size: 4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
