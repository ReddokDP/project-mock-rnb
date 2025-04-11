import styled from 'styled-components';
import { Modal, ModalButtonPanel, ModalTitle } from '@admiral-ds/react-ui';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

export const ModalContentCustom = styled(Modal)`
    display: flex;
    background: ${LIGHT_THEME.color['Neutral/Neutral 00']};
    padding: 25px;
    box-shadow: 0 4px 12px ${LIGHT_THEME.color['Neutral/Neutral 70']};
    width: 100%;
    border-radius: 0;
    transform: none;
    top: 0;
    left: 0;
`;

export const ModalTitleStyleCustom = styled(ModalTitle)`
    padding: 0;
    margin-bottom: 20px;
    font-weight: 400;
`;

export const ModalButtonPanelCustom = styled(ModalButtonPanel)`
    padding: 0;
`;

export const ModalContainerInputs = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 15px;
`;