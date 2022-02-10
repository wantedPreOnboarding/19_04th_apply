import styled from 'styled-components/macro';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Box = styled.div`
  width: 100%;
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
  margin-left: auto;
  font-size: 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: Roboto;
  color: #000;
`;

export const BoxText = styled.div`
  margin-top: 5px;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.chatPink};
  color: ${({ theme }) => theme.colors.chatBurgundy};
`;
