import React from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';
import DelReplyBtn from 'components/DelReplyBtn/DelReplyBtn';
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
      <S.BoxTextWrapper>
        <S.BoxText>
          <pre>{item.message}</pre>
        </S.BoxText>
        <S.BoxButton>
          <DelReplyBtn item={item} />
        </S.BoxButton>
      </S.BoxTextWrapper>
    </S.Item>
  );
};
export default ChatListItem;
