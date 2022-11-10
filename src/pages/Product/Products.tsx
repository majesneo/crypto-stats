import React, { FC } from "react"
import { ProductContainer } from "../../entities/product/ui/ProductContainer/ProductContainer"
import { MenuAuthorized } from "../../widgets/models/Menu/MenuAuthorized"





export const Products: FC = () => {

  return (
    <>
      <ProductContainer spacing="XL" minItemWidth="24rem" />
    </>
  )
}