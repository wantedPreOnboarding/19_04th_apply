import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      chatBlack: string;
      chatPink: string;
      chatBurgundy: string;
      chatWhite: string;
      chatTomato: string;
      chatRed: string;
      chatLGray: string;
      chatgray: string;
      chatCheeryBlossom: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      strong: number;
      semiStrong: number;
      normal: number;
    };
    lineHeight: {
      s: number;
      m: number;
      l: number;
    };
    borderRadius: {
      normal: string;
    };

    border: string;
  }
}
