import React from 'react';
import * as S from './NoticeToast.styled';
const NoticeToast = ({ msg }: { msg: string }) => {
  return (
    <S.Wrapper>
      <S.Text>{msg}</S.Text>
    </S.Wrapper>
  );
};

export default NoticeToast;
