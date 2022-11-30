import { useEffect, useRef, useState } from 'react';

export const useSetAnimationQuantity = (quantityProduct: number) => {
  const isFirstRender = useRef(true);
  const [activatedAnimation, setActivatedAnimation] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setActivatedAnimation(true);
    setTimeout(() => setActivatedAnimation(false), 300);
  }, [quantityProduct]);
  return { activatedAnimation };
};
