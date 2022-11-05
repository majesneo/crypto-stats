import styled, { keyframes } from 'styled-components';

const placeholderAnimation = keyframes({
  '0%': { backgroundPosition: '-468px 0' },
  '100%': { backgroundPosition: '468px 0' },
});

export const StyledImgPlaceholder = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #ced4da;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeholderAnimation};
  animation-timing-function: linear;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
`;
