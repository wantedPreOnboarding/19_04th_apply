import React, { useState } from 'react';
import * as S from './Login.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { login, logout } from 'store/slices/auth';
import { Link } from 'react-router-dom';
import { PAGE_URLS } from 'router/consts';

const Login = () => {
  const dispatch = useAppDispatch();
  const [imageSrc, setImageSrc] = useState<string>('');
  const avatarUrl = useAppSelector(state => state.auth.avatarURL);

  const readImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageSrc(URL.createObjectURL(event.target.files[0]));
      dispatch(
        login({ userName: '김태리', avatarURL: URL.createObjectURL(event.target.files[0]) }),
      );
    }
  };

  return (
    <S.Wrapper>
      <S.Inner>
        {<S.Avatar alt="imageAvatar" id="imageAvatar" src={imageSrc ? imageSrc : avatarUrl} />}
        <S.ImageInputBox>
          <S.ImageLabel htmlFor="imageInput">프로필사진 등록</S.ImageLabel>
          <S.ImageInput
            id="imageInput"
            type="file"
            name="proOpt-image"
            accept="image/*"
            onChange={event => {
              readImage(event);
            }}
          />
        </S.ImageInputBox>
        <S.NameInputBox>
          <S.NameInput id="nameInput" placeholder="이름을 입력해주세요"></S.NameInput>
        </S.NameInputBox>
        <Link to={PAGE_URLS.CHAT_ROOM}>
          <S.LoginBtn>Login</S.LoginBtn>
        </Link>
        <S.LoginBtn
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </S.LoginBtn>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Login;
