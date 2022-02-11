import React, { ReactElement } from 'react';
import * as S from './Header.styled';
import { useAppSelector } from 'hooks/useStore';

const Header = (): ReactElement => {
  const title = useAppSelector(state => state.chat.chatList.title);
  const userNumber = useAppSelector(state => state.chat.chatList.users).length;
  return (
    <S.Header>
      <button>
        <img src={`${process.env.REACT_APP_ASSET_PATH}/arrowIcon.svg`} />
      </button>
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
