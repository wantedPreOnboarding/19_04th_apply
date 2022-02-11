import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';

const ChatListItem = ({ item }: ChatListItemProps) => {
  const formatDate = (dateNum: number) => {
    const itemDate = new Date(dateNum);
    const setMonth = itemDate.getMonth() + 1
    const printDate = `${itemDate.getFullYear()}-${'0' + setMonth}.${itemDate.getDate() + 1} ${itemDate.getHours()}:${itemDate.getMinutes()}`;
    return printDate;
  }

  return (
    <S.Item auth={item.user.auth}>
      <S.Box auth={item.user.auth}>
        <S.BoxImg>
          <S.Profile src={item.user.avatarURL} alt={item.user.userName} />
        </S.BoxImg>
        <S.Name>{item.user.userName}</S.Name>
        <S.Data>{formatDate(item.createAt)}</S.Data>
      </S.Box>
      <S.BoxText>{item.message}</S.BoxText>
    </S.Item>
  );
}
export default ChatListItem;