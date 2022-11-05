import React, { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Button } from '../../../../shared/ui/components/button/Button';
import { ImgPlaceholder } from '../../../../shared/ui/components/ImgPlaceholder/ImgPlaceholder';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS } from '../../../../shared/ui/constants/style';
import { AuthModal } from '../../../../widgets/models/AuthModal/AuthModal';
import { IProduct } from '../../model/constants';
import { Container, Price, Title, Val } from './style';

export const ProductCard: FC<IProduct> = ({ title, price, images }) => {
  return (
    <Container>
      <Photo ratio={[1, 1]}>
        <ProgressiveImage src={images[0]} placeholder="">
          {(src, loading) =>
            loading ? <ImgPlaceholder /> : <img src={src} alt="product" />
          }
        </ProgressiveImage>
      </Photo>
      <Title theme={COLORS.PRIMARY}>{title}</Title>
      <Price>
        <Val>
          <b>{price}$</b>
        </Val>
      </Price>
      <AuthModal
        openButton={
          <Button variant={COLORS.PRIMARY} isFullWidth>
            Add to cart
          </Button>
        }
      />
    </Container>
  );
};
