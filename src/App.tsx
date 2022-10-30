import React from 'react';
import { ProductContainer } from './entities/product/ui/ProductContainer/ProductContainer';
import { FontsStyle } from './font';
import { Button } from './shared/ui/components/button/Button';
import { Input } from './shared/ui/components/input/Input';
import { Label } from './shared/ui/components/label/Label';
import { COLORS, SIZE } from './shared/ui/constants/style';
import { AppWrapper } from './style';
import { Menu } from './widgets/models/Menu/Menu';
import './rest.css';

const App = () => {
  return (
    <AppWrapper>
      <FontsStyle />
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
