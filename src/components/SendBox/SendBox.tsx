import React, { useRef, useState, useEffect } from 'react';
import * as S from './SendBox.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { writeMessage } from 'store/slices/chat';
import { generateNextId, enterSubmitCheck, isEmpty, textareaHeightHandler } from 'utils';

const SendBox: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const getMessage = useAppSelector(state => state.chat);
  const [replyMode, setReplyMode] = useState<boolean>(false);
  const [sendActive, setSendActive] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const submitForm = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    if (!isEmpty(textAreaValue.replace(/^\s+|\s+$/gm, ''))) {
      dispatch(writeMessage({ id: generateNextId(getMessage.messages), message: textAreaValue }));
      setTextAreaValue('');
      replyMode && setReplyMode(false);
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    enterSubmitCheck(event) && submitForm(event);
  };

  useEffect(() => {
    textareaHeightHandler(textareaRef);
  }, [textAreaValue]);

  useEffect(() => {
    replyMode && setTextAreaValue('송현님의답장');
  }, [replyMode]);

  useEffect(() => {
    textAreaValue.length > 0 ? setSendActive(true) : setSendActive(false);
  }, [textAreaValue]);

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
        {sendActive && <S.SendBtn type="submit">작성</S.SendBtn>}
      </S.SendForm>
    </S.Wrapper>
  );
};

export default SendBox;
