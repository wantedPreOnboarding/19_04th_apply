import { createGlobalStyle } from 'styled-components';
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
`;

export default GrobalStyles;
