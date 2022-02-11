import React, { useEffect, useState } from 'react';
import * as S from './Login.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { login } from 'store/slices/auth';
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
    <S.imageInput>
      {<img alt="imageInput" id="imageInput" src={imageSrc ? imageSrc : avatarUrl} />}
      <div>
        <label htmlFor="imageInput">프로필등록</label>
        <input
          type="file"
          name="proOpt-image"
          id="imageInput"
          accept="image/*"
          onChange={event => {
            readImage(event);
          }}
        />
      </div>
    </S.imageInput>
  );
};

export default Login;
