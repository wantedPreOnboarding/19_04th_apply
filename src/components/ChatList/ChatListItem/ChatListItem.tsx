import React, { useState } from 'react';
import * as S from './ChatListItem.styled';
import ChatListItemProps from './ChatListItem.type';
import DelReplyBtn from 'components/DelReplyBtn/DelReplyBtn';
import { formattedDate } from 'utils';

const ChatListItem = ({ item }: ChatListItemProps) => {
  const [isMsgEnter, setIsMsgEnter] = useState<boolean>(false);

  const msgEnterHandler = () => {
    setIsMsgEnter(true);
  };

  const msgLeaveHandler = () => {
    setIsMsgEnter(false);
  };

  return (
    <S.Item auth={item.user.auth}>
      <S.Box auth={item.user.auth}>
        <S.BoxImg>
          <S.Profile src={item.user.avatarURL} alt={item.user.userName} />
        </S.BoxImg>
        <S.Name>
          {item.user.auth && '*'}
          {item.user.userName}
        </S.Name>
        <S.Data>{formattedDate(item.createAt)}</S.Data>
      </S.Box>
      <S.BoxTextWrapper
        onClick={msgEnterHandler}
        onMouseEnter={msgEnterHandler}
        onMouseLeave={msgLeaveHandler}
      >
        <S.BoxText>
          <pre>{item.message}</pre>
          <S.BoxButton isMsgEnter={isMsgEnter}>
            <DelReplyBtn item={item} />
          </S.BoxButton>
        </S.BoxText>
      </S.BoxTextWrapper>
    </S.Item>
  );
};
export default ChatListItem;
