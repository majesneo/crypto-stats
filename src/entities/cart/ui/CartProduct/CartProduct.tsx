import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  setAmount,
} from '../../../../entities/cart/model/actions';
import { ICartProduct } from '../../../../entities/cart/model/slice';
import { Button } from '../../../../shared/ui/components/button/Button';
import { Field } from '../../../../shared/ui/components/Field/FieldGroup';
import { Input } from '../../../../shared/ui/components/Field/input/Input';

import { Photo } from '../../../../shared/ui/components/Photo/Photo';
import { COLORS, SIZE } from '../../../../shared/ui/constants/style';
import { ProductTitle } from './style';

const CartProduct: FC<ICartProduct> = ({
  title,
  price,
  images,
  description,
  amount,
  id,
}) => {
  const dispatch = useDispatch();

  const removeProduct = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  function handleAmount(amount: number) {
    dispatch(setAmount({ id, amount: amount }));
  }

  return (
    <>
      <div>
        <Photo ratio={[0, 0]} width={'100px'}>
          <img src={images && images[0]} alt="product" />
        </Photo>
      </div>
      <div>
        <ProductTitle>{title}</ProductTitle>
        <p>{description}</p>
      </div>
      <div>{price}$</div>
      <div>
        <Field>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleAmount(Number(e.target.value))
            }
            value={Number(amount)}
            type="number"
            min="1"
            max="10"
          />
        </Field>
      </div>
      <div>{Number(price * amount)}$</div>
      <div>
        <Button
          onClick={() => removeProduct(id)}
          size={SIZE.SMALL}
          variant={COLORS.DANGER}
        >
          Remove
        </Button>
      </div>
    </>
  );
};

export default CartProduct;
