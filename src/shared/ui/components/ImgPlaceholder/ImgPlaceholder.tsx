import React, { FC, forwardRef } from 'react';
import { StyledImgPlaceholder } from './style';

export const ImgPlaceholder: FC = forwardRef<HTMLDivElement>((props, ref) => {
  return <StyledImgPlaceholder ref={ref} />;
});
