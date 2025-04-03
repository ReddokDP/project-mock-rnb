import { SystemFilterOutline, ServiceInfoSolid } from '@admiral-ds/icons';
import { Container, ContainerInfo, InfoMessage, IconInfoSolid } from '../styled/Expenses.styled';
import { ActionBar } from '../../shared/components/ActionBar';
import { Button, T } from '@admiral-ds/react-ui';
import { MainContainer } from '../styled/Expenses.styled';
import { useOpenModalFilter} from '../../shared/hooks/useOpenModalFilter';
import { ModalFilter } from '../../modals/component/ModalFilter';

export const Expenses = () => {
    const {handleOpenModal} = useOpenModalFilter();

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
                        iconStart={SystemFilterOutline()}
                        onClick={handleOpenModal}>
                        Фильтр
                    </Button>
                    <ModalFilter />
                </ContainerInfo>
            </Container>
        </MainContainer>
    );
};
