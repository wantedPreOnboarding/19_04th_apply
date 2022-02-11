import React, { FC, MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as S from './DelReplyBtn.styled';

const DelReplyBtn: FC = () => {
  const isOpen = useAppSelector(state => state.modal.isOpen);
  const dispatch = useAppDispatch();
  console.log(isOpen, 'isOpen');

  const replyBtnHandler = (event: MouseEvent<HTMLDivElement>) => {
    console.log('reply', event);
  };

  const deleteBtnHandler = (event: MouseEvent<HTMLDivElement>) => {
    console.log('openModal', event);
  };

  return (
    <S.DelReplyWrapper>
      <S.ReplyButton onClick={replyBtnHandler} />
      <S.DeleteButton onClick={deleteBtnHandler} />
    </S.DelReplyWrapper>
  );
};

export default DelReplyBtn;
