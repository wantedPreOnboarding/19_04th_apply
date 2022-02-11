import React, { FC } from 'react';
import * as S from './DelReplyBtn.styled';

const DelReplyBtn: FC = () => {
  return (
    <S.DelReplyWrapper>
      <S.ReplyButton />
      <S.DeleteButton />
    </S.DelReplyWrapper>
  );
};

export default DelReplyBtn;
