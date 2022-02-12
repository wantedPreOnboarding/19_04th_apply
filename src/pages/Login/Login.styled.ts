import styled from 'styled-components';
import { hexToRGB } from 'utils/';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.chatBlack};
  background: ${props => props.theme.colors.chatWhite};
  border-radius: ${props => props.theme.borderRadius.normal};
  display: flex;
  justify-content: center;
`;

export const Logo = styled.span`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSize.l};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  background: ${props => props.theme.colors.chatWhite};
  color: ${props => props.theme.colors.chatBlack};
  border-radius: ${props => props.theme.borderRadius.normal};
  z-index: 1000;
  span {
    margin-left: 5px;
  }
`;

export const Icon = styled.img`
  width: 300px;
  height: 300px;
  z-index: 1;
  position: absolute;
  top: 150px;
`;

export const Header = styled.div`
  height: 300px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 100px 30px 0px 30px;
  background: linear-gradient(
    90deg,
    ${props => hexToRGB(props.theme.colors.chatRed, 0.8)} 0%,
    ${props => hexToRGB(props.theme.colors.chatRed, 0.95)} 100%
  );
  span {
    font-size: 30px;
    font-weight: ${props => props.theme.fontWeight.strong};
  }
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.normal};
`;
export const ChatIcon = styled.img`
  width: 250px;
  height: 250px;
  border-radius: ${props => props.theme.borderRadius.normal};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`;

export const Menu = styled.div`
  position: absolute;
  bottom: 150px;
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.chatTomato};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.chatWhite};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
`;
export const HeadMenu = styled(Menu)`
  top: 150px;
`;

export const MenuBox = styled.section`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.chatPink};
  }
  &:hover:last-child {
    background-color: ${({ theme }) => theme.colors.chatWhite};
  }
  transition: all 0.2s ease-in-out;
`;

export const ImageLabel = styled.label`
  width: 90%;
  height: 50px;
  display: flex;
  padding: 0px 50px;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.chatTomato};
  font-weight: 600;
  text-align: center;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
`;
export const ImageInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export const NameInput = styled.input`
  width: 90%;
  height: 50px;
  padding: 0px 50px;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.chatTomato};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
`;

export const LoginMenu = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginBtn = styled.button`
  border: 1px solid ${props => props.theme.colors.chatTomato};
  border-radius: 20px;
  margin-top: 20px;
  width: 200px;
  height: 50px;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  &:hover {
    background: ${props => props.theme.colors.chatTomato};
    color: ${({ theme }) => theme.colors.chatWhite};
  }
  transition: all 0.2s ease-in-out;
`;
export const GoBackBtn = styled.button`
  background: ${props => props.theme.colors.chatTomato};
  color: ${props => props.theme.colors.chatWhite};
  border-radius: 20px;
  margin-top: 20px;
  width: 200px;
  height: 50px;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  &:hover {
    filter: brightness(90%);
  }
  transition: all 0.2s ease-in-out;
`;
export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  background-color: ${({ theme }) => theme.colors.chatWhite};
  z-index: 2;
`;
