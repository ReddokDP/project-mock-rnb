import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';
import { Link } from 'react-router-dom';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MiniHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
`;

export const MiniHeaderPath = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const MiniHeaderButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;


export const LinksStyled = styled(Link)`
    text-decoration: none;
    color: ${LIGHT_THEME.color['Primary/Primary 60 Main']} ;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;
    width: 96vw; //Помню, что нужно делать кратное 5, но тут просто очень хорошо смотрится с таким значением.
    padding: 20px;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
    border-radius: 10px;
`;

export const InfoMessage = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
`;

export const PathTitle = styled(T)`
    font-weight: 400;
`