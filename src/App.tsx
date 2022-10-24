import React from 'react';
import { COLORS, SIZE } from '@/shared/constants/style';
import { Button } from '@/shared/ui/components/button/Button';
import { Input } from '@/shared/ui/components/input/Input';
import { Label } from '@/shared/ui/components/label/Label';

const App = () => {
  return (
    <div>
      <Label htmlFor={'test'}>TEST LABEL</Label>
      <Input id={'test'} />
      <Button>button</Button>
      <Button size={SIZE.LARGE} variant={COLORS.PRIMARY}>
        button
      </Button>
    </div>
  );
};
export default App;
