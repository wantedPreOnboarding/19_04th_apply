import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';

const ChatListItem = ({ chat }: ChatListItemProps) => {
  return (
    <S.Item>
      <S.Box>
        <S.BoxImg>
          <S.Profile src='https://i.postimg.cc/zfgj317C/profile.jpg' alt='profile img' />
        </S.BoxImg>
        <S.Name>송현</S.Name>
        <S.Data>2022-02-19 21:15</S.Data>
      </S.Box>
      <S.BoxText>안녕</S.BoxText>
    </S.Item>);
}
export default ChatListItem;