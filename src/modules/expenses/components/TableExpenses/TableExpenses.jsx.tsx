import { useSelector } from 'react-redux';
import { selectExpenses } from '../../slice/expensesTableSlice';
import { Table } from '@admiral-ds/react-ui';
import { Container, WrapperContainer } from './TableExpenses.styled';
import type { Column } from '@admiral-ds/react-ui';
import { useState } from 'react';
import { ExpensesTableEnum } from '../../enum/ExpensesTableEnum';

const columnsList: Column[] = [
    { name: ExpensesTableEnum.OPER_ID, title: 'ИД Операции' },
    { name: ExpensesTableEnum.OBJECT_ID, width: 150, title: 'ИД в сервисе ЦБ' },
    { name: ExpensesTableEnum.STATUS, width: 120, title: 'Статус' },
    { name: ExpensesTableEnum.BUY_SELL, width: 120, title: 'Направление' },
    { name: ExpensesTableEnum.EXTERNAL_ID, width: 150, title: 'Поручения' },
    { name: ExpensesTableEnum.DOCUMENT_ID, width: 150, title: 'Идентификатор сделки ZF' },
    { name: ExpensesTableEnum.EVENT_ID, width: 150, title: 'ИД события' },
    { name: ExpensesTableEnum.IIS, width: 150, title: 'Признак договора ИИС' },
    { name: ExpensesTableEnum.CLIENT_ID, width: 150, title: 'Субсчет клиента' },
    { name: ExpensesTableEnum.ASSET_ID, width: 150, title: 'Идентификатор актива' },
    { name: ExpensesTableEnum.ASSET_NAME, width: 150, title: 'Наименование актива' },
    { name: ExpensesTableEnum.ISIN, width: 150, title: 'ISIN' },
    { name: ExpensesTableEnum.ACTUAL_DATE, width: 150, title: 'Дата и время операции во ВУ' },
    { name: ExpensesTableEnum.EVENT_QTY, width: 150, title: 'Количество актива' },
];

// Помню, что логику нужно выносить отдельно - сделаю.

export function TableExpenses() {
    const [cols, setCols] = useState(columnsList);
    const dataRowTable = useSelector(selectExpenses);

    const handleResize = ({ name, width }: { name: string; width: string }) => {
        const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
        setCols(newCols);
    };

    return (
        <Container>
            <WrapperContainer>
                <Table columnList={columnsList} rowList={dataRowTable ?? []} onColumnResize={handleResize} />
            </WrapperContainer>
        </Container>
    );
}