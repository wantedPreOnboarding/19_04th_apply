import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    chatBlack: '#2e2e2e',
    chatPink: '#fbe6e9',
    chatBurgundy: '#8E1E1B',
    chatWhite: '#fff',
    chatTomato: '#FF505F',
    chatRed: '#D7322D',
    chatLGray: '#cccccc',
    chatgray: '#DAD9D9',
    chatCheeryBlossom: '#ffd6d6',
  },
  fontSize: {
    xs: '10x',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
  },

  fontWeight: {
    strong: 900,
    semiStrong: 700,
    normal: 500,
  },

  lineHeight: {
    s: 1.42,
    m: 1.5,
    l: 1.6,
  },

  borderRadius: {
    normal: '10px',
  },
};

export { theme };
