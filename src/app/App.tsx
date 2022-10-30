import React from 'react';
import { ProductContainer } from '../entities/product/ui/ProductContainer/ProductContainer';
import { useAuth } from '../features/Authentication/hooks';

import { Button } from '../shared/ui/components/button/Button';
import { Input } from '../shared/ui/components/input/Input';
import { Label } from '../shared/ui/components/label/Label';
import { COLORS, SIZE } from '../shared/ui/constants/style';
import { Menu } from '../widgets/models/Menu/Menu';
import { AppWrapper } from './style';
import '../shared/lib/reset-CSS/rest.css';

const App = () => {
  const { user } = useAuth()
  console.log(user, 'user');

  return (
    <AppWrapper>
      <Menu />
      <ProductContainer spacing="XL" minItemWidth="24rem" />
      <Label htmlFor={'test'}>TEST LABEL</Label>
      <Input id={'test'} />
      <Button>button</Button>
      <Button size={SIZE.LARGE} variant={COLORS.PRIMARY}>
        button
      </Button>
    </AppWrapper>
  );
};
export default App;
