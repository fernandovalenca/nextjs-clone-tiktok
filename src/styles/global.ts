import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'sofiapro';
    src: url('/fonts/sofiapro.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sofiapro;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
