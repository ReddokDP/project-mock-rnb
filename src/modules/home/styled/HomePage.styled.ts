import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const Card = styled.div`
    border: 1px solid ${LIGHT_THEME.color['Neutral/Neutral 20']};
    border-radius: 10px;
    padding: 16px;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
    color: ${LIGHT_THEME.color['Neutral/Neutral 00']} 
    cursor: pointer;
    height: 90px;
`;

export const PathPage = styled(T)`
    margin: 20px;
    font-size: 18px;
    font-weight: 400;
`

export const ContainerCards = styled.div`
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`;