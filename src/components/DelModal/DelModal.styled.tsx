import styled from 'styled-components/macro';

export const DelModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px 14px;
`;

export const DelModalWindow = styled.div`
  width: 100%;
  margin: auto auto;
  padding: 30px 30px;
  border: 1px solid #ff505f; //chatPinkyRed 테마 추가
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.chatWhite};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`;

export const DelModalH1 = styled.h1`
  margin-bottom: 30px;
  font-size: 28px; // 더 큰 xxl만들어야 함 22px;
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  color: ${({ theme }) => theme.colors.chatBlack};
`;

export const DelContentBox = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  padding: 22px 0 0 0;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  color: ${({ theme }) => theme.colors.chatWhite};
  background-color: #ff505f; //chatPinkyRed theme
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  text-align: center;
  text-overflow: ellipsis;
`;

export const DelModalH2 = styled.h2`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: right;
`;

export const Button = styled.button`
  width: 85px;
  height: 45px;
  margin-left: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  color: #ff505f; //chatPinkyRed theme
  background-color: #ffd6d6; //chatCherryBlossom theme
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  cursor: pointer;
`;
