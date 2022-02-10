import React, { useRef, useState, useEffect } from 'react';
import * as S from './SendBox.styled';
const SendBox: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [textAreaValue, setTextAreaValue] = useState<string>();

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit', textAreaValue);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode !== 13 && !event.ctrlKey) {
      return;
    } else {
      event.ctrlKey && event.keyCode === 13
        ? console.log('ctrl+enter')
        : event.keyCode === 13 && console.log('enter');
    }
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [textAreaValue]);

  return (
    <S.Wrapper>
      <S.SendForm onSubmit={submitForm}>
        <S.TextBox
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
