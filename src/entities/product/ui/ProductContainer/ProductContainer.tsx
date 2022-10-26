import React, {FC, useEffect} from "react";
import styled from "styled-components";
import {ProductCard} from "../ProductCard/ProductCard";
import {SPACING_MAP} from "../../../../shared/constants/style";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../model/thunk";
import {RootState} from "../../../../shared/ui/lib/store/store";


export interface GridProps {
  spacing: keyof typeof SPACING_MAP;
  minItemWidth: string;
};


export const StyledGridContainer = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => SPACING_MAP[props.spacing] ?? SPACING_MAP.LG};

  grid-template-columns: repeat(auto-fit,
  minmax(min(${(props) => props.minItemWidth}, 100%), 1fr));
`;


export const ProductContainer: FC<GridProps> = ({spacing, minItemWidth}) => {
  const {error, products, loading} = useSelector((state:RootState) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    // @ts-ignore
    dispatch(getProducts())
  }, [])

  const listProucts =    products.map((product,index)=>{
    console.log(product,'prod')
  return  <ProductCard key={product.id} product={product}/>

  }  )


  return (
    <StyledGridContainer spacing={spacing} minItemWidth={minItemWidth}>
      {listProucts}
  </StyledGridContainer>)
}
