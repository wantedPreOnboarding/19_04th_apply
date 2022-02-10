import React, { useRef, useState, useEffect } from 'react';
import * as S from './SendBox.styled';
import { useAppSelector, useAppDispatch } from '../../hooks/useStore';

const SendBox: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [replyMode, setReplyMode] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const submitForm = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    console.log('submit', textAreaValue);
    setTextAreaValue('');
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submitForm(event);
    }
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaValue]);

  useEffect(() => {
    replyMode && setTextAreaValue('송현님의답장');
  }, [replyMode]);

  return (
    <S.Wrapper>
      <S.SendForm onSubmit={submitForm}>
        <S.TextBox
          value={textAreaValue}
          placeholder="write a message"
          ref={textareaRef}
          onChange={textAreaChange}
          onKeyDown={keyDownHandler}
        />
        <S.SendBtn type="submit">작성</S.SendBtn>
      </S.SendForm>
    </S.Wrapper>
  );
};

export default SendBox;
