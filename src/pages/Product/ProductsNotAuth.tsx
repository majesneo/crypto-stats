import React from "react"
import { ProductContainer } from "../../entities/product/ui/ProductContainer/ProductContainer"
import { Menu } from "../../widgets/models/Menu/Menu"





export const ProductsNotAuth = () => {
  return (
    <>
      <Menu />
      <ProductContainer spacing="XL" minItemWidth="24rem" />
    </>
  )
}