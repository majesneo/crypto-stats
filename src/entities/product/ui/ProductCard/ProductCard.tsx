import { FC } from 'react';
import React from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Login } from '../../../../features/Authentication/thunk';
import { AuthForm } from '../../../../features/Authentication/ui/AuthForm/AuthForm';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared/lib/store/store';

import { Button } from '../../../../shared/ui/components/button/Button';
import Error from '../../../../shared/ui/components/Error/Error';
import { ImgPlaceholder } from '../../../../shared/ui/components/ImgPlaceholder/ImgPlaceholder';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS } from '../../../../shared/ui/constants/style';
import {
  Modal,
  ModalContents,
} from '../../../../widgets/models/Modal/ModalContext';
import { ModalOpenButton } from '../../../../widgets/models/Modal/ModalOpenButton';
import { IProduct } from '../../model/constants';
import { Price, ProductContainer, Title, Val } from './style';

export const ProductCard: FC<IProduct & { addToCart: () => void }> = ({
  title,
  price,
  images,
  addToCart,
}) => {
  const { essence: user, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    addToCart();
  };

  const login = ({ email, password }: { email: string; password: string }) => {
    dispatch(Login({ email, password }));
  };

  return (
    <ProductContainer>
      <Photo ratio={[1, 1]}>
        <ProgressiveImage src={images[0]} placeholder=''>
          {(src, loading) =>
            loading ? <ImgPlaceholder /> : <img src={src} alt='product' />
          }
        </ProgressiveImage>
      </Photo>
      <Title theme={COLORS.PRIMARY}>{title}</Title>
      <Price>
        <Val>
          <b>{price}$</b>
        </Val>
      </Price>
      <Modal>
        <ModalContents>
          {!error ? (
            <h2 style={{ textAlign: 'center' }}>Login</h2>
          ) : (
            <Error value={Boolean(error)}>
              <h1 style={{ textAlign: 'center' }}>{error}</h1>
            </Error>
          )}
          <AuthForm error={error} onSubmit={login} />
        </ModalContents>
        <ModalOpenButton>
          {(props) => (
            <Button
              onClick={!user ? props.setIsOpen : handleAddToCart}
              isFullWidth
              variant={COLORS.PRIMARY}
            >
              Add to cart
            </Button>
          )}
        </ModalOpenButton>
      </Modal>
    </ProductContainer>
  );
};
