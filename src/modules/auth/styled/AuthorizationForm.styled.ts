import styled, { keyframes } from 'styled-components';
import { Button } from '@admiral-ds/react-ui';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoader = styled.div`
    position: fixed;
    width: 80px;
    height: 80px;
    border: 10px solid ${LIGHT_THEME.color['Neutral/Neutral 00']};
    border-top: 10px solid ${LIGHT_THEME.color['Primary/Primary 60 Main']};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export const ButtonLogOut = styled(Button)`
    position: absolute;
    top: 60px;
    z-index: 1;
`;
