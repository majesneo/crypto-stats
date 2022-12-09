import { useEffect, useRef, useState } from 'react';

export const useSticky = <T extends HTMLElement>() => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const headerRef = useRef<T>();

  useEffect(() => {
    const header = headerRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { rootMargin: '-1px 0px 0px 0px', threshold: [1] }
    );

    if (header) {
      observer.observe(header);
    }

    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return { isSticky, headerRef };
};
