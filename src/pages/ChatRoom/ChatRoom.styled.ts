import styled from 'styled-components/macro';

export const ChatRoom = styled.div`
  height: calc(100% - 121px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Message = styled.div`
  height: 300px;
`;
