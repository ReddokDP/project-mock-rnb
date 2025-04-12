import styled from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

interface ImageProps {
    image: string;
    width?: string;
    height?: string;
    marginLeft?: string;
    marginTop?: string;
}

export const HeaderStyled = styled.header`
    display: flex;
    height: 55px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
`;

export const LogoStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.div<ImageProps>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;

    width: ${(props) => props.width || '20px'};
    height: ${(props) => props.height || '20px'};
    margin-left: ${(props) => props.marginLeft || '0'};
    margin-top: ${(props) => props.marginTop || '0'};
`;
