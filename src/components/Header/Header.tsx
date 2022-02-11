import React, { ReactElement } from 'react';
import * as S from './Header.styled';
import { useAppSelector } from 'hooks/useStore';

const Header = (): ReactElement => {
  const title = useAppSelector(state => state.chat.title);
  const userNumber = useAppSelector(state => state.chat.users).length;
  return (
    <S.Header>
      <img src={`${process.env.REACT_APP_ASSET_PATH}/arrowIcon.svg`} />
      <h1>
        {title}
        {` (${userNumber})`}
      </h1>
      <img src={`${process.env.REACT_APP_ASSET_PATH}/moreIcon.svg`} />
    </S.Header>
  );
};
export default React.memo(Header);
