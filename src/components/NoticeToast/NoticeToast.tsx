import React from 'react';
import * as S from './NoticeToast.styled';
import NoticeToastProps from './NoticeToast.type';
const NoticeToast = ({ msg, top, bottom }: NoticeToastProps) => {
  return (
    <S.Wrapper top={top} bottom={bottom}>
      <S.Text>{msg}</S.Text>
    </S.Wrapper>
  );
};

export default NoticeToast;
