import React, { FC, forwardRef, useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../../shared/constants/constants';
import { RootState } from '../../../../shared/lib/store/store';
import { Button } from '../../../../shared/ui/components/button/Button';
import { ImgPlaceholder } from '../../../../shared/ui/components/ImgPlaceholder/ImgPlaceholder';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { Spinner } from '../../../../shared/ui/components/Spinner/Spinner';
import { COLORS } from '../../../../shared/ui/constants/style';
import { ModalBackground } from '../../../../widgets/models/Modal/ModalBackground';
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from '../../../../widgets/models/Modal/ModalContext';
import { IProduct } from '../../model/constants';
import { Container, Price, Title, Val } from './style';

export const ProductCard: FC<IProduct> = ({ title, price, images }) => {


  return (
    <Container>
      <Photo ratio={[1, 1]}>
        <ProgressiveImage src={images[0]} placeholder="">
          {(src, loading) => (loading ? <ImgPlaceholder /> : <img src={src} alt="product" />)}
        </ProgressiveImage>
      </Photo>
      <Title theme={COLORS.PRIMARY}>{title}</Title>
      <Price>
        <Val>
          <b>{price}$</b>
        </Val>
      </Price>
      <Modal>
        <ModalBackground />
        <ModalContents>
          <h1>register</h1>
        </ModalContents>
        <ModalOpenButton>
          <Button variant={COLORS.PRIMARY} isFullWidth>
            Add to cart
          </Button>
        </ModalOpenButton>
      </Modal>
    </Container>
  );
};
