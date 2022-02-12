import React, { ReactElement, useRef } from 'react';
import { useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';
import ChatList from 'components/ChatList/ChatList';
import { InputBox } from 'components';
import Portal from 'components/Portal/Portal';
import DelModal from 'components/DelModal/DelModal';

const ChatRoom = (): ReactElement => {
  const chatRoomRef = useRef<HTMLDivElement>(null);

  useScrollBottom(chatRoomRef.current);

  return (
    <>
      <S.ChatRoom ref={chatRoomRef}>
        <ChatList />
      </S.ChatRoom>
      <InputBox />
      <Portal>
        <DelModal />
      </Portal>
    </>
  );
};
export default ChatRoom;
