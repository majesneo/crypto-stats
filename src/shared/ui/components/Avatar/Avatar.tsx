import React, { FC } from 'react';
import { StyledAvatar } from './style';

type IAvatar = React.ComponentPropsWithoutRef<'img'>;

export const Avatar: FC<IAvatar> = ({ ...props }) => {
  return <StyledAvatar {...props} />;
};
