import React, { useRef, useState, useEffect } from 'react';
import * as S from './SendBox.styled';
import { useAppSelector, useAppDispatch } from 'hooks/useStore';
import { writeMessage, replymessage } from 'store/slices/chat';
import {
  generateNextId,
  enterSubmitCheck,
  isStringEmpty,
  textareaHeightHandler,
  startEndWhiteSpaceRemove,
} from 'utils';
import NoticeToast from './NoticeToast';

const SendBox: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatList = useAppSelector(state => state.chat.chatList);
  const replyMsg = useAppSelector(state => state.chat.reply);
  const replyText = `${replyMsg.userName}\n${replyMsg.message}\n(회신)`;

  const [sendActive, setSendActive] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [isEmpted, setIsEmpted] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const sendReplyHandler = (msg: { userName: string; message: string }): void => {
    dispatch(replymessage(msg));
  };

  const sendMessageHandler = (event?: React.FormEvent<HTMLFormElement>) => {
    event && event.preventDefault();
    if (!isStringEmpty(startEndWhiteSpaceRemove(textAreaValue))) {
      dispatch(writeMessage({ id: generateNextId(chatList.messages), message: textAreaValue }));
      setTextAreaValue('');
      replyMsg && sendReplyHandler({ userName: '', message: '' });
    } else {
      setIsEmpted(true);
      setToastMsg('메세지를 입력해주세요!');
    }
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    enterSubmitCheck(event) && sendMessageHandler();
  };

  useEffect(() => {
    textareaHeightHandler(textareaRef);
  }, [textAreaValue]);

  useEffect(() => {
    replyMsg.userName && replyMsg.message && setTextAreaValue(replyText);
  }, [replyMsg]);

  useEffect(() => {
    textAreaValue.length > 0 ? setSendActive(true) : setSendActive(false);
  }, [textAreaValue]);

  useEffect(() => {
    if (toastMsg && !isEmpted) {
      setTimeout(() => {
        return setToastMsg(''), setIsEmpted(false);
      }, 1300);
    }
  }, [toastMsg]);

  return (
    <S.Wrapper>
      <S.Inner>
        {isEmpted && <NoticeToast msg="메세지를 입력해주세요" />}

        <S.SendForm onSubmit={sendMessageHandler}>
          <S.TextBox
            value={textAreaValue}
            placeholder="write a message"
            ref={textareaRef}
            onChange={textAreaChange}
            onKeyDown={keyDownHandler}
          />
          {sendActive && <S.SendBtn type="submit">작성</S.SendBtn>}
        </S.SendForm>
      </S.Inner>
    </S.Wrapper>
  );
};

export default SendBox;