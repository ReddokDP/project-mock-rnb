import styled from 'styled-components';
import { SystemSmallArrowDownOutline as IconButtonLogOut } from '@admiral-ds/icons';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonExit = styled.button`
    padding: 0;
    width: 25px;
    height: 25px;
    border: none;
    background-color: ${LIGHT_THEME.color['Neutral/Neutral 00']};
`;

export const IconButtonExit = styled(IconButtonLogOut)`
    path {
        fill: ${LIGHT_THEME.color['Neutral/Neutral 30']};
        transform: scale(1.5);
        transform-origin: center;
    }
`;