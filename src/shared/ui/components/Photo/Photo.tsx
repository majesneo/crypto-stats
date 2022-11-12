import { FC } from 'react';
import React from 'react';
import { StyledPhoto } from './style';

export interface StyledPhotoProps {
  ratio: [number, number];
  children: React.ReactNode;
  height?: string;
  width?: string;
}

export const Photo: FC<StyledPhotoProps> = ({
  ratio,
  children,
  width,
  height,
}) => {
  return (
    <StyledPhoto width={width} height={height} ratio={ratio}>
      {children}
    </StyledPhoto>
  );
};
