import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap');

  * {
      overflow-y: hidden;
      font-family: "ABeeZee", sans-serif;
      font-weight: 400;
      font-style: normal;
  }
`;

export default GlobalStyle;
