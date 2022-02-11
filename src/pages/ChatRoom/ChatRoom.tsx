import React, { ReactElement, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import { writeMessage } from 'store/slices/chat';
import { useScrollBottom } from 'hooks';
import * as S from './ChatRoom.styled';

const ChatRoom = (): ReactElement => {
  const dispatch = useAppDispatch();
  const chatRoomRef = useRef<HTMLDivElement>(null);

  useScrollBottom(chatRoomRef.current);

  return (
    <S.ChatRoom ref={chatRoomRef}>
      {useAppSelector(state => state.chat.chatList.messages).map(({ id, message }) => (
        <S.Message key={id}>{message}</S.Message>
      ))}
      <button
        onClick={() => {
          dispatch(writeMessage({ id: 10, message: '123' }));
        }}
      >
        추가
      </button>
    </S.ChatRoom>
  );
};
export default ChatRoom;
