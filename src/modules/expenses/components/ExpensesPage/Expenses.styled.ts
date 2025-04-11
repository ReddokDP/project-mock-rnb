import styled from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const MainContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
`
export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconInfoSolid = styled.image`
    width: 18px;
    height: 18px;
`;

export const ContainerInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
    border-radius: 10px;
`;

export const InfoMessage = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
`;