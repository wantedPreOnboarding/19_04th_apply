import React, { FC } from 'react';
import * as S from './DelModal.styled';

const DelModal: FC = () => {
  return (
    <S.DelModalWrapper>
      <S.DelModalWindow>
        <S.DelModalH1>메시지 삭제</S.DelModalH1>
        <S.DelContentBox>안녕하세요! 반갑습니다. 사랑해...</S.DelContentBox>
        <S.DelModalH2>메시지를 삭제하시겠습니까?</S.DelModalH2>
        <S.ButtonWrapper>
          <S.Button>취소</S.Button>
          <S.Button>삭제</S.Button>
        </S.ButtonWrapper>
      </S.DelModalWindow>
    </S.DelModalWrapper>
  );
};

export default DelModal;
