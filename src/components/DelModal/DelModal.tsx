import React from 'react';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import * as S from './DelModal.styled';
import { setIsOpen } from 'store/slices/modal';
import { deleteMessage } from 'store/slices/chat';
import sliceMessage from 'utils/sliceMessage';

const DelModal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(state => state.modal.isOpen);
  const id = useAppSelector(state => state.modal.id);
  const message = useAppSelector(state => state.modal.message);

  const modalClose = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const delMessage = () => {
    dispatch(deleteMessage(id));
    dispatch(setIsOpen(!isOpen));
  };

  return (
    <S.DelModalWrapper isOpen={isOpen}>
      <S.DelModalBackground onClick={modalClose} />
      <S.DelModalWindow>
        <S.DelModalH1>메시지 삭제</S.DelModalH1>
        <S.DelContentBox>{sliceMessage(message, 10)}</S.DelContentBox>
        <S.DelModalH2>메시지를 삭제하시겠습니까?</S.DelModalH2>
        <S.ButtonWrapper>
          <S.Button onClick={modalClose}>취소</S.Button>
          <S.Button onClick={delMessage}>삭제</S.Button>
        </S.ButtonWrapper>
      </S.DelModalWindow>
    </S.DelModalWrapper>
  );
};

export default DelModal;
