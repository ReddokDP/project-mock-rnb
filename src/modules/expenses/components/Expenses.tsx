import { SystemFilterOutline, ServiceInfoSolid } from '@admiral-ds/icons';
import { Container, ContainerInfo, InfoMessage, IconInfoSolid } from './Expenses.styled';
import { ActionBar } from '../../shared/components/ActionBar';
import { Button, T } from '@admiral-ds/react-ui';
import { MainContainer } from './Expenses.styled';
import { ModalFilter } from './ModalFilter';
import { useModalFilter } from '../hooks/useModalFilter';

export const Expenses = () => {
    const { handleOpenModal, isOpen } = useModalFilter();

    return (
        <MainContainer>
            <ActionBar />
            <Container>
                <ContainerInfo>
                    <InfoMessage>
                        <IconInfoSolid>{ServiceInfoSolid()}</IconInfoSolid>
                        <T font="Body/Body 2 Short" as="p" color="Neutral/Neutral 50">
                            Для отображения информации уточните параметры поиска.
                        </T>
                    </InfoMessage>
                    <Button
                        dimension="s"
                        appearance="secondary"
                        iconStart={<SystemFilterOutline />}
                        onClick={handleOpenModal}>
                        Фильтр
                    </Button>
                </ContainerInfo>
            </Container>
            {isOpen && (<ModalFilter/>)}
        </MainContainer>
    );
};
