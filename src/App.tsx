import React from 'react';
import {Label} from "./shared/ui/components/label/Label";
import {Button} from "./shared/ui/components/button/Button";
import {Input} from "./shared/ui/components/input/Input";
import {COLORS, SIZE} from "./shared/constants/style";
import {ProductContainer} from "./entities/product/ui/ProductContainer/ProductContainer";




const App = () => {
  return (
    <div>
      <ProductContainer spacing="XL" minItemWidth="24rem"/>
      <Label htmlFor={'test'}>TEST LABEL</Label>
      <Input id={'test'}/>
      <Button>button</Button>
      <Button size={SIZE.LARGE} variant={COLORS.PRIMARY}>
        button
      </Button>
    </div>
  );
};
export default App;
