import styled from 'styled-components/macro';

export const DelReplyWrapper = styled.div`
  display: flex;
  width: 32px;
  height: 16px;
  padding: 0 4px;
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
  margin-top: 4px;
  height: 8px;
`;

export const DeleteButton = styled.img.attrs({
  src: `${process.env.REACT_APP_ASSET_PATH}/deleteBtn.svg`,
})`
  height: 9px;
  cursor: pointer;
`;
