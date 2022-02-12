import styled from 'styled-components/macro';
import { ItemProps } from './ChatListItem.type';

export const Item = styled.li<ItemProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.auth && 'flex-end'};
  width: 70%;
  padding: 5px 0;
`;

export const Box = styled.div<ItemProps>`
  display: flex;
  align-items: center;
`;

export const BoxImg = styled.div`
  display: flex;
  width: 27px;
  height: 28px;
`;

export const Profile = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`;

export const Name = styled.strong`
  padding-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  font-family: Noto Sans;
  color: ${({ theme }) => theme.colors.chatBlack};
`;

export const Data = styled.span`
  margin-left: 10px;
  font-size: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Roboto;
  color: #000;
`;

export const BoxTextWrapper = styled.div<ItemProps>`
  display: flex;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
  }
`;

export const BoxText = styled.div`
  margin-top: 5px;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.chatPink};
  color: ${({ theme }) => theme.colors.chatBurgundy};
  align-self: flex-end;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const BoxButton = styled.div`
  width: 32px;
  margin: 0 7px 1px 7px;
  align-self: flex-end;
`;
