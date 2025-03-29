import styled, { createGlobalStyle } from 'styled-components';

export const InputsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
`;

export const BodyGlobal = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #F1F2F4;
    }
`;