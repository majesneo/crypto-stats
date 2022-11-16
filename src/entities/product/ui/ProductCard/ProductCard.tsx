import React, { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Login } from '../../../../features/Authentication/thunk';
import { AuthForm } from '../../../../features/Authentication/ui/AuthForm/AuthForm';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../shared/lib/store/store';
import { Button } from '../../../../shared/ui/components/button/Button';
import { ImgPlaceholder } from '../../../../shared/ui/components/ImgPlaceholder/ImgPlaceholder';
import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS } from '../../../../shared/ui/constants/style';
import {
  Modal,
  ModalContents,
  ModalOpenButton,
} from '../../../../widgets/models/Modal/ModalContext';
import { IProduct } from '../../model/constants';
import { Price, ProductContainer, Title, Val } from './style';

export const ProductCard: FC<IProduct & { addToCart: () => void }> = ({
  title,
  price,
  images,
  addToCart,
}) => {
  const { loading } = useAppSelector((state) => state.product);
  const { essence: user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    addToCart();
  };

  const login = ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
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
      <Modal>
        <ModalContents>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <AuthForm status={loading}>
            {(props) => (
              <Button
                onClick={() => login(props.login())}
                type="submit"
                variant={COLORS.PRIMARY}
              >
                Login
              </Button>
            )}
          </AuthForm>
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
