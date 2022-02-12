import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';
import DelReplyBtn from 'components/DelReplyBtn/DelReplyBtn';
import { formattedDate } from 'utils';

const ChatListItem = ({ item }: ChatListItemProps) => {
  const formatDate = (dateNum: number) => {
    const itemDate = new Date(dateNum);
    const setMonth = itemDate.getMonth() + 1;
    const printDate = `${itemDate.getFullYear()}-${'0' + setMonth}.${
      itemDate.getDate() + 1
    } ${itemDate.getHours()}:${itemDate.getMinutes()}`;
    return printDate;
  };

  return (
    <S.Item auth={item.user.auth}>
      <S.Box auth={item.user.auth}>
        <S.BoxImg>
          <S.Profile src={item.user.avatarURL} alt={item.user.userName} />
        </S.BoxImg>
        <S.Name>{item.user.userName}</S.Name>
        <S.Data>{formattedDate(item.createAt)}</S.Data>
      </S.Box>
      <S.BoxTextWrapper>
        <S.BoxText>{item.message}</S.BoxText>
        <S.BoxButton>
          <DelReplyBtn item={item} />
        </S.BoxButton>
      </S.BoxTextWrapper>
    </S.Item>
  );
};
export default ChatListItem;
