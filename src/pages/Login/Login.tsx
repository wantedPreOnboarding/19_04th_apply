import React, { useEffect, useState } from 'react';
import * as S from './Login.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { login, logout } from 'store/slices/auth';
import { Link } from 'react-router-dom';
import { changeUserInfo } from 'store/slices/chat';
import { PAGE_URLS } from 'router/consts';
import { startEndWhiteSpaceRemove, enterSubmitCheck } from 'utils';
import { NoticeToast } from 'components';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const avatarURL = useAppSelector(state => state.auth.avatarURL);
  const userId = useAppSelector(state => state.auth.userId);
  const loginUserName = useAppSelector(state => state.auth.userName);

  const authCheck = userId ? true : false;
  const [imageSrc, setImageSrc] = useState<string>(avatarURL);
  const [userName, setUserName] = useState<string>(loginUserName ? loginUserName : '');
  const [isEmpted, setIsEmpted] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  const readImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageSrc(URL.createObjectURL(event.target.files[0]));
    }
  };

  const sendInfoHandler = () => {
    dispatch(login({ userName: userName, avatarURL: imageSrc }));
    dispatch(changeUserInfo({ userName: userName, avatarURL: imageSrc }));
  };
  const checkValid = () => {
    !userName && !imageSrc
      ? setToastMsg('필수 정보를 입력해주세요!')
      : !imageSrc
      ? setToastMsg('프로필을 등록해주세요!')
      : setToastMsg('이름을 입력해주세요!');
  };

  const logOutHandler = () => {
    dispatch(logout());
  };

  const userNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(startEndWhiteSpaceRemove(event.target.value));
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!enterSubmitCheck(event)) {
      return;
    } else if (enterSubmitCheck(event) && (!userName || !imageSrc)) {
      checkValid();
    } else {
      sendInfoHandler();
      history.push(PAGE_URLS.CHAT_ROOM);
    }
  };

  useEffect(() => {
    if (!userId) {
      setImageSrc('');
      setUserName('');
    }
  }, [userId]);

  useEffect(() => {
    console.log(toastMsg);
    if (toastMsg && !isEmpted) {
      setIsEmpted(true);
      setTimeout(() => {
        setToastMsg('');
        return setIsEmpted(false);
      }, 1300);
    } else return;
  }, [toastMsg]);

  return (
    <S.Wrapper>
      <S.Logo>
        <img
          alt="imageAvatar"
          id="imageAvatar"
          src={`${process.env.REACT_APP_ASSET_PATH}/logoIcon.svg`}
        />
        <span>sweet</span>
      </S.Logo>
      <S.Header>
        <span>Hello👋 {authCheck ? loginUserName : 'Sweeter'}!</span>
      </S.Header>
      <S.HeadMenu>
        {imageSrc ? (
          <S.Avatar alt="imageAvatar" id="imageAvatar" src={imageSrc} />
        ) : (
          <S.ChatIcon
            alt="imageAvatar"
            id="imageAvatar"
            src={`${process.env.REACT_APP_ASSET_PATH}/chatIcon.svg`}
          />
        )}
      </S.HeadMenu>
      <S.Menu>
        <S.MenuBox>
          <S.ImageLabel htmlFor="imageInput">
            {authCheck ? '프로필사진수정' : '+프로필사진등록'}
          </S.ImageLabel>
          <S.ImageInput
            id="imageInput"
            type="file"
            name="proOpt-image"
            accept="image/*"
            onChange={event => {
              readImage(event);
            }}
          />
        </S.MenuBox>
        <S.MenuBox>
          <S.NameInput
            id="nameInput"
            value={userName}
            placeholder="이름을 입력해주세요"
            onChange={event => {
              userNameHandler(event);
            }}
            onKeyUp={keyDownHandler}
          ></S.NameInput>
        </S.MenuBox>
        <S.MenuBox>
          {authCheck ? (
            <S.LoginMenu>
              <Link to={PAGE_URLS.CHAT_ROOM}>
                <S.LoginBtn>채팅으로 돌아가기</S.LoginBtn>
              </Link>
              <S.LogoutBtn onClick={logOutHandler}>LogOut</S.LogoutBtn>
            </S.LoginMenu>
          ) : userName && imageSrc ? (
            <Link to={PAGE_URLS.CHAT_ROOM}>
              <S.LoginBtn onClick={sendInfoHandler}>Login</S.LoginBtn>
            </Link>
          ) : (
            <S.LoginBtn onClick={checkValid}>Login</S.LoginBtn>
          )}
        </S.MenuBox>
      </S.Menu>
      {isEmpted && <NoticeToast bottom="50px" msg={toastMsg} />}

      <S.Footer>s w e e t</S.Footer>
    </S.Wrapper>
  );
};

export default Login;
