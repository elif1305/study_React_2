import { createGlobalStyle } from 'styled-components';

export const GlobalStlyes = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: "#00252e";
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }

`;
