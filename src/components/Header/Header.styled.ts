import styled from 'styled-components/macro';
import { hexToRGB } from 'utils/';

export const Header = styled.header`
  height: 65px;
  background: linear-gradient(
    90deg,
    ${props => hexToRGB(props.theme.colors.chatRed, 0.8)} 0%,
    ${props => hexToRGB(props.theme.colors.chatRed, 0.95)} 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  font-weight: 700;
  > h1 {
    color: ${props => props.theme.colors.chatWhite};
    padding-top: 2px;
  }
  > button {
    background: none;
    padding: 0 5px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: auto;
`;
