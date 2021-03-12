import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;500;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: Barlow, sans-Serif;
  }

  li {
    list-style: none;
  }

  input {
    outline: 0;
  }
`;

export default GlobalStyle;
