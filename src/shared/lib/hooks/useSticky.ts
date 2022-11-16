import { useEffect, useRef, useState } from 'react';

const stickyCssProp = `position: fixed;
    top: 0;
    width: 100%;
    background-color: white; 
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);`;

export const useStickyHeader = () => {
  const refHeader = useRef<HTMLElement>(null);
  const refAfterHeader = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerEl = refHeader.current;
    const afterHeaderEl = refAfterHeader.current;
    if (!headerEl || !afterHeaderEl) {
      return;
    }
    const headerRect = headerEl.getBoundingClientRect();
    const checkScroll = () => {
      const scrollTop = window.scrollY;
      const halfElement = (headerRect.height / 100) * 70;
      if (halfElement <= scrollTop) {
        headerEl.setAttribute('style', stickyCssProp);
        afterHeaderEl.style.paddingTop = headerRect.height + 'px';
      } else if (window.scrollY === 0) {
        headerEl.removeAttribute('style');
        afterHeaderEl.style.paddingTop = 0 + 'px';
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });

  return { refHeader, refAfterHeader };
};


export const useSetAnimationQuantity = (quantityProduct: number) => {
  const isFirstRender = useRef(true);
  const [activatedAnimation, setActivatedAnimation] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setActivatedAnimation(true);
    setTimeout(() => setActivatedAnimation(false), 500);
  }, [quantityProduct]);
  return { activatedAnimation }
}