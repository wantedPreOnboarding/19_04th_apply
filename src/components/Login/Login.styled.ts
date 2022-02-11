import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const imageInput = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: sirGray;
  label {
    display: block;
    width: 200px;
    padding: 10px 0;
    border: 2px solid sirDPurple;
    color: sirDgray;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
  }
  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
  }
`;
