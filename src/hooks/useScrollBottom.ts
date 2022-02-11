import { useLayoutEffect, useState } from 'react';

const useScrollBottom = ($el: HTMLElement | null) => {
  const [initElement, setInitElement] = useState<boolean | null>(false);

  console.log($el, $el?.scrollHeight, initElement);
  const handleScroll = () => {
    if (!$el) {
      setInitElement(true);
    } else {
      $el.scrollTo(0, $el.scrollHeight);
    }
  };

  useLayoutEffect(handleScroll, [$el?.scrollHeight, $el]);
};

export default useScrollBottom;
