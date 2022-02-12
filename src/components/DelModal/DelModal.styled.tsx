import styled from 'styled-components/macro';

export const DelModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 3;
`;

export const DelModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 4;
`;

export const DelModalWindow = styled.div`
  position: absolute;
  width: 96%;
  margin: auto auto;
  padding: 30px 30px;
  border: 1px solid ${({ theme }) => theme.colors.chatTomato};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.chatWhite};
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  z-index: 3000;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`;

export const DelModalH1 = styled.h1`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
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
  background-color: ${({ theme }) => theme.colors.chatTomato};
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
  color: ${({ theme }) => theme.colors.chatWhite};
  background-color: ${({ theme }) => theme.colors.chatTomato};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  cursor: pointer;
`;
