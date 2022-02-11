import styled from 'styled-components';

export const ChatRoom = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Message = styled.div`
  height: 300px;
`;
