import React, { MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as S from './DelReplyBtn.styled';
import ChatListItemProps from '../ChatList/ChatListItem/ChatListItem.type';
import { replymessage } from 'store/slices/chat';
import DelModal from 'components/DelModal/DelModal';
import { delModalNum, modalMessage, setIsOpen } from 'store/slices/modal';

const DelReplyBtn = ({ item }: ChatListItemProps) => {
  const isOpen = useAppSelector(state => state.modal.isOpen);
  const dispatch = useAppDispatch();
  console.log(isOpen, 'isOpen');

  const replyBtnHandler = () => {
    dispatch(replymessage({ userName: item.user.userName, message: item.message }));
  };

  const deleteBtnHandler = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(setIsOpen(true));
    dispatch(delModalNum(item.id));
    dispatch(modalMessage(item.message));
  };

  return (
    <S.DelReplyWrapper>
      <S.ReplyBtn onClick={replyBtnHandler}>
        <S.ReplyIcon />
      </S.ReplyBtn>
      <S.DeleteButton onClick={deleteBtnHandler} />
    </S.DelReplyWrapper>
  );
};
export default DelReplyBtn;
