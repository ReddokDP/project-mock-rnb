import styled from 'styled-components';

export const Logo = styled.div<{ image1: string; image2: string }>`
    display: flex;
    align-items: center;

    .image1 {
        background-image: url(${(props) => props.image1});
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
    }

    .image2 {
        background-image: url(${(props) => props.image2});
        background-repeat: no-repeat;
        width: 50px;
        height: 20px;
        margin-left: 7px;
        margin-top: 7px;
    }
`;
