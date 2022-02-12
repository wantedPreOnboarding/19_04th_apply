import styled, { keyframes } from 'styled-components/macro';

const fadeIn = keyframes`
from {
  opacity:0; 
  top:0px;
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

export const Wrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  padding: 10px;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.colors.chatPink};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1s;
  -webkit-animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1s;
  z-index: -1;
`;
export const Text = styled.span`
  font-size: ${props => props.theme.fontSize.l};
  font-weight: ${props => props.theme.fontWeight.strong};
`;
