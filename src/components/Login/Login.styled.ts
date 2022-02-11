import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: ${props => props.theme.colors.chatBlack};
  background: ${props => props.theme.colors.chatPink};
  border-radius: ${props => props.theme.borderRadius.normal};
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.chatWhite};
`;

export const ImageInputBox = styled.section`
  margin-top: 10px;
`;

export const ImageLabel = styled.label`
  display: block;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.chatLGray};
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.normal};
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  &:hover {
    filter: brightness(90%);
  }
`;

export const ImageInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;
export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.normal};
`;

export const NameInput = styled.input`
  outline: none;
  border: none;
  text-align: center;
  width: 95%;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  background: none;
`;

export const NameInputBox = styled.section`
  display: block;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid ${props => props.theme.colors.chatLGray};
  font-weight: 600;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius.normal};
  margin: 10px auto;
  &:focus-within {
    border: 5px solid ${props => props.theme.colors.chatPink};
  }
`;

export const LoginBtn = styled.button`
  background: ${props => props.theme.colors.chatTomato};
  border-radius: ${props => props.theme.borderRadius.normal};
  width: 200px;
  height: 50px;
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: ${props => props.theme.fontWeight.semiStrong};
  &:hover {
    filter: brightness(90%);
  }
`;
