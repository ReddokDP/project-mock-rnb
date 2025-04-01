import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';

export const ContainerBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ActionBarPath = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ActionBarContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const PathPage = styled(T)`
    font-weight: 400;
    font-size: 18px;
`;