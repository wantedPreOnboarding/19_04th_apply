import React from 'react';
import { useAppSelector } from 'hooks/useStore';
import * as S from './DelModal.styled';

const DelModal = () => {
  const isOpen = useAppSelector(state => state.modal.isOpen);

  const PrintDeleteMessage = (): string => {
    const deleteMessage = '안녕하세요! 반갑습니다. 사랑해요. 룰루랄라~';
    if (deleteMessage.length > 10) {
      return deleteMessage.substring(0, 10) + '···';
    } else {
      return deleteMessage;
    }
  };

  const modalClose = () => {
    console.log('취소버튼 동작');
  };

  const delMessage = () => {
    console.log('삭제');
  };

  return (
    <S.DelModalWrapper isOpen={isOpen}>
      <S.DelModalWindow>
        <S.DelModalH1>메시지 삭제</S.DelModalH1>
        <S.DelContentBox>{PrintDeleteMessage()}</S.DelContentBox>
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
