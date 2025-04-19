import { Table } from '@admiral-ds/react-ui';
import { Container, WrapperContainer } from './TableExpenses.styled';
import { useTableExpenses } from '../../hooks/useTableExpenses';

export function TableExpenses() {

    const {cols, dataRowTable, handleResize} = useTableExpenses()

    return (
        <Container>
            <WrapperContainer>
                <Table columnList={cols} rowList={dataRowTable ?? []} onColumnResize={handleResize} />
            </WrapperContainer>
        </Container>
    );
}