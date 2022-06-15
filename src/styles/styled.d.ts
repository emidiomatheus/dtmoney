import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      red: string,
      blue: string,
      blueLight: string,
      green: string,
      darkGray: string;
  
      textTitle: string,
      textBody: string,
  
      background: string,
      shape: string,
    } 
  }
}