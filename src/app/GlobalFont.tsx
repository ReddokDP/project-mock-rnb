import { createGlobalStyle } from 'styled-components';
import ABeeZeeWoff from '../assets/fonts/ABeeZee-Regular.woff';

export const GlobalFont = createGlobalStyle`
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
