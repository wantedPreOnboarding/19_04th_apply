import React, { ReactElement, useRef } from 'react';
import { useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';
import ChatList from 'components/ChatList/ChatList';
import { InputBox } from 'components';

const ChatRoom = (): ReactElement => {
  const chatRoomRef = useRef<HTMLDivElement>(null);

  useScrollBottom(chatRoomRef.current);

  return (
    <>
      <S.ChatRoom ref={chatRoomRef}>
        <ChatList />
      </S.ChatRoom>
      <InputBox />
    </>
  );
};
export default ChatRoom;
