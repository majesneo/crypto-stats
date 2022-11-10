import React, { FC } from "react"
import { MenuAuthorized } from "../../widgets/models/Menu/MenuAuthorized"


export const LayoutDefault: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <>
      <MenuAuthorized />
      {children}
    </>
  )
}