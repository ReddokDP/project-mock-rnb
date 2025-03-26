import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';

export const CardContainer = styled.div`
    border: 1px solid #D5D8DE;
    border-radius: 10px;
    padding: 16px;
    background-color: #ffffff;
    cursor: pointer;
    height: 90px;
`;

export const PathTitle = styled(T)`
    margin: 20px;
    font-weight: 400;
`

export const GridContainer = styled.div`
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`;