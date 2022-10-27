import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../../shared/ui/components/button/Button';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS } from '../../../../shared/ui/constants/style';
import { RootState } from '../../../../shared/ui/lib/store/store';
import { IProduct } from '../../model/constants';
import { Container, Price, Title, Val } from './style';

export const ProductCard: FC<IProduct> = ({
  title,
  price,
  images,
  description,
}) => {
  const { loading } = useSelector((state: RootState) => state);

  return (
    <Container>
      <Photo ratio={[1, 1]}>
        <img src={images && images[0]} alt="product" />
      </Photo>
      <Title theme={COLORS.PRIMARY}>{title}</Title>
      <Price>
        <Val>
          <b>{price}$</b>
        </Val>
      </Price>

      <Button variant={COLORS.PRIMARY} isFullWidth>
        Add to cart
      </Button>
    </Container>
  );
};
