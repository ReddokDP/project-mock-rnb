import { createGlobalStyle } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const BodyGlobal = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${LIGHT_THEME.color['Neutral/Neutral 10']};
    }
`;