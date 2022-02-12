import React, { ReactElement, useRef, useState } from 'react';
import { useAppSelector, useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';
import ChatList from 'components/ChatList/ChatList';
import { InputBox } from 'components';
import Portal from 'components/Portal/Portal';
import DelModal from 'components/DelModal/DelModal';

const ChatRoom = (): ReactElement => {
  const chatRoomRef = useRef<HTMLDivElement>(null);
  const messages = useAppSelector(state => state.chat.chatList.messages);
  const [isScroll, setIsScroll] = useState(true);

  const scrollOFF = () => {
    setIsScroll(false);
  };

  const scrollON = () => {
    setIsScroll(true);
  };

  const scrollValidator = () => {
    return isScroll;
  };

  useScrollBottom(chatRoomRef.current, [messages], !scrollValidator());

  return (
    <>
      <S.ChatRoom ref={chatRoomRef}>
        <ChatList />
      </S.ChatRoom>
      <InputBox scrollON={scrollON} />
      <Portal>
        <DelModal extraHandler={scrollOFF} />
      </Portal>
    </>
  );
};
export default ChatRoom;
