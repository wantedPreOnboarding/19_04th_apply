import React from 'react';
import * as S from './ChatList.styled';
import { useAppSelector } from 'hooks/useStore';
import ChatListItem from './ChatListItem/ChatListItem';

const ChatList = () => {
  const auth = useAppSelector(state => state.auth)
  const users = useAppSelector(state => state.chat.users)
  const messages = useAppSelector(state => state.chat.messages);
  const addAuth = users.map((user) => user.id === auth.loginUserId ? { ...user, auth: true } : { ...user, auth: false });
  const roomData = messages.map((message) => ({ ...message, user: addAuth.filter(users => users.id === message.userId)[0] }));

  return (
    <S.Wrapper>
      {roomData.map(item => <ChatListItem key={item.id} item={item} />)}
    </S.Wrapper>
  );
}
export default ChatList;