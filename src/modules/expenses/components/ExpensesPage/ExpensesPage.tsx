import { SystemFilterOutline, ServiceInfoSolid } from '@admiral-ds/icons';
import { Container, ContainerInfo, InfoMessage, IconInfoSolid } from './Expenses.styled';
import { ActionBar } from '../../../../shared';
import { Button, T } from '@admiral-ds/react-ui';
import { MainContainer } from './Expenses.styled';
import { ModalFilter } from '../ModalFilter/ModalFilter';
import { useModalFilter } from '../../hooks/useModalFilter';
import { TableExpenses } from '../TableExpenses/TableExpenses';
import { useSelector } from 'react-redux';
import { selectExpenses } from '../../slice/expensesTableSlice';

export const ExpensesPage = () => {
    const { handleOpenModal, isOpen } = useModalFilter();
    const dataRowTable = useSelector(selectExpenses);

    return (
        <MainContainer>
            <ActionBar />
            <Container>
                <ContainerInfo>
                    {dataRowTable.length === 0 && (
                        <InfoMessage>
                            <IconInfoSolid>{ServiceInfoSolid()}</IconInfoSolid>
                            <T font="Body/Body 2 Short" as="p" color="Neutral/Neutral 50">
                                Для отображения информации уточните параметры поиска.
                            </T>
                            <Button
                                dimension="s"
                                appearance="secondary"
                                iconStart={<SystemFilterOutline />}
                                onClick={handleOpenModal}>
                                Фильтр
                            </Button>
                        </InfoMessage>
                    )}
                    {dataRowTable.length > 0 && <TableExpenses />}
                </ContainerInfo>
            </Container>
            {isOpen && <ModalFilter />}
        </MainContainer>
    );
};
