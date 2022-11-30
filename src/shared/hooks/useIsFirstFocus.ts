import { Ref, useState, useRef, useCallback } from 'react';

export function useIsFirstFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<T>();

  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => ({});

  const refCb = useCallback((node: T) => {
    if (ref.current) {
      ref.current.removeEventListener('focus', onFocus);
      ref.current.removeEventListener('blur', onBlur);
    }
    ref.current = node;
    if (node) {
      node.addEventListener('focus', onFocus);
      node.addEventListener('blur', onBlur);
    }
  }, []);

  return [refCb, isFocused];
}
