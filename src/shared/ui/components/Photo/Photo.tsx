import { FC } from 'react';
import React from 'react';
import { StyledPhoto } from './style';

export interface StyledPhotoProps {
  ratio: [number, number];
  children: React.ReactNode;
}

export const Photo: FC<StyledPhotoProps> = ({ ratio, children }) => {
  return <StyledPhoto ratio={ratio}>{children}</StyledPhoto>;
};
