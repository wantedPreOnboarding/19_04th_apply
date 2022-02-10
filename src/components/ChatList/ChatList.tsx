import React from 'react';
import * as S from './ChatList.styled';
import { useAppSelector } from 'hooks/useStore';
import ChatListItem from './ChatListItem/ChatListItem';

const ChatList = () => {
  // const chatList = useAppSelector(state => state.chat);
  const list = [];
  return (
    <S.Wrapper>
      {/* {list.map(item => <ChatListItem key='id' chat={item} />)} */}
      {/* <S.Item>
        <S.Box>
          <S.BoxImg>
            <S.Profile src='https://i.postimg.cc/zfgj317C/profile.jpg' alt='profile img' />
          </S.BoxImg>
          <S.Name>송현</S.Name>
          <S.Data>2022-02-19 21:15</S.Data>
        </S.Box>
        <S.BoxText>안녕</S.BoxText>
      </S.Item> */}
    </S.Wrapper>
  );
}
export default ChatList;