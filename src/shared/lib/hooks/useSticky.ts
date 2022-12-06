import { useEffect, useRef } from 'react';

const stickyCssProp = `position: fixed;
    top: 0;
    width: 100%;
    background-color: white; 
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);`;

export const useStickyHeader = <
  H extends HTMLElement,
  A extends HTMLElement
>() => {
  const refHeader = useRef<H>(null);
  const refAfterHeader = useRef<A>(null);

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
