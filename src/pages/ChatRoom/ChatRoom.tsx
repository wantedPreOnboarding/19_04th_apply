import React, { ReactElement, useRef } from 'react';
import { useAppSelector, useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';
import ChatList from 'components/ChatList/ChatList';
import { InputBox } from 'components';

const ChatRoom = (): ReactElement => {
  const chatRoomRef = useRef<HTMLDivElement>(null);
  const messages = useAppSelector(state => state.chat.chatList.messages);

  useScrollBottom(chatRoomRef.current, [messages]);

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
