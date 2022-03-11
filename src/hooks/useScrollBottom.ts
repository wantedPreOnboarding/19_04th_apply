import { useLayoutEffect, useState } from 'react';

const useScrollBottom = ($el?: HTMLElement | null, dependencies: unknown[] = [], isOFF = false) => {
  const [initElement, setInitElement] = useState<boolean>(false);

  const handleScroll = () => {
    if (!$el) {
      setInitElement(true);
    } else {
      !isOFF && $el.scrollTo(0, $el.scrollHeight);
    }
  };
  useLayoutEffect(handleScroll, [...dependencies, initElement]);
};

export default useScrollBottom;
