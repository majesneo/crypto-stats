import React, { forwardRef } from 'react';
import { StyledImgPlaceholder } from './style';

export const ImgPlaceholder = forwardRef((props, ref) => {
  return <StyledImgPlaceholder ref={ref} />;
});
