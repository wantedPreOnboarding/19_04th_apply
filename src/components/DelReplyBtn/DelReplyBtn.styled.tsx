import styled from 'styled-components/macro';

export const DelReplyBtnWrapper = styled.div`
  width: 100px;
  height: 24px;
  text-align: center;
`;

export const DelReplyBox = styled.div`
  display: flex;
  width: 40px;
  height: 24px;
  /* padding: 0 4px; */
  background-color: ${({ theme }) => theme.colors.chatgray};
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.05);
    transition: transform 100ms;
  }
`;

export const ReplyBtn = styled.button`
  cursor: pointer;
`;

export const ReplyIcon = styled.img.attrs({
  src: `${process.env.REACT_APP_ASSET_PATH}/replyBtn.svg`,
})`
  color-adjust: ${({ theme }) => theme.colors.chatRed};
  margin-top: 4px;
  margin-left: 1px;
  height: 11px;
`;

export const DeleteButton = styled.img.attrs({
  src: `${process.env.REACT_APP_ASSET_PATH}/deleteBtn.svg`,
})`
  width: 12px;
  height: 13px;
  cursor: pointer;
`;
