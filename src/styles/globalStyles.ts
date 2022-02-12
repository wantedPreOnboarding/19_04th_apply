import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

const GrobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color:inherit;
    text-decoration: none;
  }

  button{
    padding: 0;
    margin: 0;
    border: none;
    background: inherit;
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
  
  #modal-root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layout {
    display: flex;
    height: 100vh;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }

  .phone {
    position: relative;
    max-width: 430px;
    max-height: 920px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px;
  }
`;

export default GrobalStyles;
