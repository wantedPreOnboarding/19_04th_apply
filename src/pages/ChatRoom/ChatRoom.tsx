import React, { ReactElement, useRef } from 'react';
import { useAppSelector, useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';
import ChatList from 'components/ChatList/ChatList';
import { InputBox } from 'components';
import Portal from 'components/Portal/Portal';
import DelModal from 'components/DelModal/DelModal';

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
      <Portal>
        <DelModal />
      </Portal>
    </>
  );
};
export default ChatRoom;
