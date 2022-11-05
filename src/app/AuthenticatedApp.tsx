
import React, { FC } from "react"
import { ProductContainer } from "../entities/product/ui/ProductContainer/ProductContainer"
import { MenuAuthorized } from "../widgets/models/Menu/MenuAuthorized"


export const AuthenticatedApp: FC = () => {
  return (
    <>
      <MenuAuthorized />
      <ProductContainer spacing="XL" minItemWidth="24rem" />
    </>
  )
}