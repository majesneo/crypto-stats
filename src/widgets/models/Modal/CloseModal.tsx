import React, { FC, ReactNode } from 'react';
import { CloseIcon } from "../../../shared/ui/components/Icons/CloseIcon/Index";



interface IClose {
  children?: ReactNode
}



export const CloseModal: FC<IClose & { onClick?: React.MouseEventHandler<SVGElement> }> = ({ children, ...props }) => {
  return < CloseIcon {...props} > {children}</CloseIcon>
} 