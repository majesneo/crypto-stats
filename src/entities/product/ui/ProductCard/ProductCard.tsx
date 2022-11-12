import React, { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../../../features/Authentication/thunk';
import { RootState } from '../../../../shared/lib/store/store';
import { AuthForm } from '../../../../shared/ui/components/AuthForm/AuthForm';
import { Button } from '../../../../shared/ui/components/button/Button';
import { ImgPlaceholder } from '../../../../shared/ui/components/ImgPlaceholder/ImgPlaceholder';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS } from '../../../../shared/ui/constants/style';
import { AuthModal } from '../../../../widgets/models/AuthModal/AuthModal';
import { IProduct } from '../../model/constants';
import { Price, ProductContainer, Title, Val } from './style';

export const ProductCard: FC<
  IProduct & { handleToCart: (product: IProduct) => void }
> = ({ title, price, images, handleToCart }) => {
  const { loading } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const login = ({ email, password }: { email?: string; password: string }) => {
    dispatch(Login({ email, password }));
  };

  return (
    <ProductContainer>
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
        modalContent={
          <>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <AuthForm
              status={loading}
              onSubmit={login}
              submitButton={<Button variant={COLORS.PRIMARY}>Login</Button>}
            />
          </>
        }
        openButton={
          <Button onClick={handleToCart} isFullWidth variant={COLORS.PRIMARY}>
            Add to card
          </Button>
        }
      />
    </ProductContainer>
  );
};
