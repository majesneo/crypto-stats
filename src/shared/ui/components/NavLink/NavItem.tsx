import React, { ReactNode } from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavItem } from "./style";

export interface INavLink {
  children: ReactNode;
  to: string;
}


export const NavItem: FC<INavLink> = ({ to, children }) => {

  return (
    <StyledNavItem><NavLink to={to}>{children}</NavLink></StyledNavItem>
  )
}