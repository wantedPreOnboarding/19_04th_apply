import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';

const ChatListItem = ({ item }: ChatListItemProps) => {
  return (
    <S.Item>
      <S.Box>
        <S.BoxImg>
          <S.Profile src={item.user.avatarURL} alt='profile img' />
        </S.BoxImg>
        <S.Name>{item.user.userName}</S.Name>
        <S.Data>{item.createAt}</S.Data>
      </S.Box>
      <S.BoxText>{item.message}</S.BoxText>
    </S.Item>
  );
}
export default ChatListItem;