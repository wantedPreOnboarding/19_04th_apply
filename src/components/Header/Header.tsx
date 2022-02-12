import React, { ReactElement } from 'react';
import * as S from './Header.styled';
import { useAppSelector } from 'hooks/useStore';
import { Link } from 'react-router-dom';
import { PAGE_URLS } from 'router/consts';

const Header = (): ReactElement => {
  const title = useAppSelector(state => state.chat.chatList.title);
  const userNumber = useAppSelector(state => state.chat.chatList.users).length;
  return (
    <S.Header>
      <Link to={PAGE_URLS.LOGIN}>
        <img src={`${process.env.REACT_APP_ASSET_PATH}/arrowIcon.svg`} />
      </Link>
      <h1>
        {title}
        {` (${userNumber})`}
      </h1>
      <button>
        <img src={`${process.env.REACT_APP_ASSET_PATH}/moreIcon.svg`} />
      </button>
    </S.Header>
  );
};
export default React.memo(Header);
