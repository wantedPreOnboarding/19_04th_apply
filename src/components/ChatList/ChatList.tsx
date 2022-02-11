import React from 'react';
import * as S from './ChatList.styled';
import { useAppSelector } from 'hooks/useStore';
import ChatListItem from './ChatListItem/ChatListItem';

const ChatList = () => {
  const auth = useAppSelector(state => state.auth);
  const users = useAppSelector(state => state.chat.chatList.users);
  const messages = useAppSelector(state => state.chat.chatList.messages);
  const addAuth = users.map(user =>
    user.userId === auth.userId ? { ...user, auth: true } : { ...user, auth: false },
  );
  const roomData = messages.map(message => ({
    ...message,
    user: addAuth.filter(users => users.userId === message.userId)[0],
  }));

  return (
    <S.Wrapper>
      {roomData.map(item => (
        <ChatListItem key={item.id} item={item} />
      ))}
    </S.Wrapper>
  );
};
export default ChatList;
