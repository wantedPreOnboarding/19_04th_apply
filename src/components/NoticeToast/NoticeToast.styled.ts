import styled, { keyframes } from 'styled-components/macro';
import NoticeToastProps from './NoticeToast.type';
const fadeIn = keyframes`
from {
  opacity:0; 
  top:0px;
}
to{
    opacity:1;
}
`;
const fadeInB = keyframes`
from {
  opacity:0; 
  bottom:0;
}
to{
    opacity:1;
}
`;
const fadeOut = keyframes`
from {
  opacity:1; }
to{
    opacity:0;
}
`;

export const Wrapper = styled.div<NoticeToastProps>`
  position: absolute;
  ${props => props.top && `top:${props.top}`};
  ${props => props.bottom && `bottom:${props.bottom}`};
  left: 0;
  padding: 10px;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.colors.chatPink};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
  animation: ${props => (props.bottom ? fadeInB : fadeIn)} 0.5s, ${fadeOut} 0.5s 1s;
  -webkit-animation: ${props => (props.bottom ? fadeInB : fadeIn)} 0.5s, ${fadeOut} 0.5s 1s;
  z-index: 1;
`;
export const Text = styled.span`
  font-size: ${props => props.theme.fontSize.l};
  font-weight: ${props => props.theme.fontWeight.strong};
`;
