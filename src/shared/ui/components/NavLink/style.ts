import styled, { css } from "styled-components";
import { SECONDARY_COLOR } from "../../constants/style";
import { INavLink } from "./NavItem";





export const StyledNavItem = styled.span<INavLink>`
cursor:pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;

a{
  color:inherit;
}

>a.active{
border-bottom: 1px solid ${SECONDARY_COLOR}
}

&:hover{
    transition: all 0.3s ease;
    border-bottom: 1px solid ${SECONDARY_COLOR}
  }
`
