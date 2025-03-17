import { createGlobalStyle } from 'styled-components';
import ABeeZeeWoff from './ABeeZee-Regular.woff';

const GlobalFont = createGlobalStyle`
     @font-face {
         font-family: 'ABeeZee';
         src: url(${ABeeZeeWoff}) format('woff');
         font-weight: normal;
         font-style: normal;
     }

    * {
        font-family: "ABeeZee", sans-serif;
    }
`;

export default GlobalFont;
