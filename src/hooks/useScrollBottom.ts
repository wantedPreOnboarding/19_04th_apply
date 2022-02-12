import { useLayoutEffect, useState } from 'react';
import { useAppSelector } from './useStore';

const useScrollBottom = ($el?: HTMLElement | null) => {
  const [initElement, setInitElement] = useState<boolean | null>(false);
  const dispatch = useAppSelector(state => state.chat.chatList.messages);

  const handleScroll = () => {
    if (!$el) {
      setInitElement(true);
    } else {
      $el.scrollTo(0, $el.scrollHeight);
    }
  };

  useLayoutEffect(handleScroll, [dispatch, $el?.scrollHeight, initElement]);
};

export default useScrollBottom;
