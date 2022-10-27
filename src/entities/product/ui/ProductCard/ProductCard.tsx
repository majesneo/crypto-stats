import React, {FC} from "react";
import {Container, Photo, Price, Title, Val} from "../style";
import {COLORS} from "../../../../shared/constants/style";
import {Button} from "../../../../shared/ui/components/button/Button";
import {IProduct} from "../../model/constants";

interface ProductCard extends Pick<IProduct, 'title' | 'price' | 'images'>{
  product:IProduct
}

export const ProductCard: FC<ProductCard > = ({title, price,images}) => {
  console.log(title,'title')
  console.log(price,'price')
  return (

    <Container>
      <Photo alt={'title'}/>
      <Title theme={COLORS.PRIMARY}>{title}</Title>
      <Price>
        <Val>
          <b>{price}</b>
        </Val>
        productInstallment
      </Price>
      <Button variant={COLORS.PRIMARY} isFullWidth>
        Add to cart
      </Button>
    </Container>
  )
}
