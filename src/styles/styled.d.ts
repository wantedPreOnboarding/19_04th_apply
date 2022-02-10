import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      name: string;
      textBackground: string;
      text: string;
      black: string;
      white: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
    };
  }
}
