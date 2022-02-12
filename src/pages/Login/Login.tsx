import React, { useEffect, useState } from 'react';
import * as S from './Login.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { login } from 'store/slices/auth';

const Login = () => {
  const dispatch = useAppDispatch();
  const [imageSrc, setImageSrc] = useState<string>('');
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
      <S.Logo>
        <img
          alt="imageAvatar"
          id="imageAvatar"
          src={`${process.env.REACT_APP_ASSET_PATH}/logoIcon.svg`}
        />

        <span>sweet</span>
      </S.Logo>
      <S.Header>
        <span>Hello 👋 Sweeter!</span>
      </S.Header>{' '}
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
        </S.MenuBox>
        <S.MenuBox>
          <S.NameInput id="nameInput" placeholder="이름을 입력해주세요"></S.NameInput>
        </S.MenuBox>
        <S.MenuBox>
          <S.LoginBtn>Login</S.LoginBtn>
        </S.MenuBox>
      </S.Menu>
      <S.Footer>s w e e t</S.Footer>
    </S.Wrapper>
  );
};

export default Login;
