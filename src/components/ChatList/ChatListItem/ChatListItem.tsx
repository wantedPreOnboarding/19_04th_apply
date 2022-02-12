import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';
import { formattedDate } from 'utils';

const ChatListItem = ({ item }: ChatListItemProps) => {
  return (
    <S.Item auth={item.user.auth}>
      <S.Box auth={item.user.auth}>
        <S.BoxImg>
          <S.Profile src={item.user.avatarURL} alt={item.user.userName} />
        </S.BoxImg>
        <S.Name>{item.user.userName}</S.Name>
        <S.Data>{formattedDate(item.createAt)}</S.Data>
      </S.Box>
      <S.BoxText>{item.message}</S.BoxText>
    </S.Item>
  );
};
export default ChatListItem;
