import { useLayoutEffect, useState } from 'react';

const useScrollBottom = ($el?: HTMLElement | null, dependencies: unknown[] = []) => {
  const [initElement, setInitElement] = useState<boolean | null>(false);

  const handleScroll = () => {
    if (!$el) {
      setInitElement(true);
    } else {
      $el.scrollTo(0, $el.scrollHeight);
    }
  };

  useLayoutEffect(handleScroll, [...dependencies, $el?.scrollHeight, initElement]);
};

export default useScrollBottom;
