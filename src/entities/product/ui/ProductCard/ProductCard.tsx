import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../../shared/constants/constants';
import { RootState } from '../../../../shared/lib/store/store';
import { Button } from '../../../../shared/ui/components/button/Button';
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
  const { loading } = useSelector((state: RootState) => state.product);


  if (loading === STATUS.LOADING) {
    return <Spinner />
  }

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
