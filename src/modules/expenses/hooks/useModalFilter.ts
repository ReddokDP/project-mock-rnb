import { useDispatch, useSelector } from 'react-redux';
import {
    closeModalFilter,
    openModalFilter,
    setModalData,
    selectorExpensesData,
    selectorIsOpen,
} from '../slice/expensesSlice';
import { useForm } from 'react-hook-form';
import { ExpensesData } from '../slice/expensesSlice';
import { useGetDataMutation } from '../sevices/apiExpensesTable';
import { setTableExpenses } from '../slice/expensesTableSlice';

interface StatusOption {
    id: string;
    value: string;
    title: string;
}

interface Pagination {
    numberOfItemsPerPage: number;
    currentPageNumber: number;
}

interface Sorting {
    sortBy: string;
    sortOrder: 'ASC' | 'DESC';
}

interface RequestPayload {
    startDate: string;
    endDate: string;
    status: string;
    pagination: Pagination;
    sorting: Sorting;
}

interface FormData {
    startDate: string;
    endDate: string;
    status?: string;
}

interface InputValues  {
    customerId: string;
    contractNumber: string;
    asset: string;
    startDate: string;
    endDate: string;
    status: string;
}

const initialValuesInputs: InputValues  = {
    customerId: '',
    contractNumber: '',
    asset: '',
    startDate: '',
    endDate: '',
    status: '',
};

export const useModalFilter = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(selectorIsOpen);
    const expensesData = useSelector(selectorExpensesData);

    const [getData] = useGetDataMutation();

    const { control, handleSubmit, reset, getValues } = useForm<ExpensesData>({
        defaultValues: expensesData || initialValuesInputs,
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(async ({ startDate, endDate, status }: FormData) => {
        try {
            const requestPayload: RequestPayload = {
                startDate: new Date(startDate).toISOString(),
                endDate: new Date(endDate).toISOString(),
                status: status || 'Confirmed',
                pagination: {
                    numberOfItemsPerPage: 10,
                    currentPageNumber: 1,
                },
                sorting: {
                    sortBy: 'actualDate',
                    sortOrder: 'DESC',
                },
            };

            const response = await getData(requestPayload).unwrap();
            dispatch(setTableExpenses(response.operInfo));
            const currentData = getValues();
            dispatch(setModalData(currentData));
            dispatch(closeModalFilter());
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    });

    const handleOpenModal = () => {
        dispatch(openModalFilter());
    };

    const handleCloseModal = () => {
        dispatch(closeModalFilter());
    };

    const handleReset = () => {
        reset(initialValuesInputs);
        dispatch(setModalData(initialValuesInputs));
    };

    const statusOptions: StatusOption[] = [
        { id: '1', value: 'New', title: 'Новый' },
        { id: '2', value: 'Confirmed', title: 'Завершенный' },
        { id: '3', value: 'Canceled', title: 'Отмененный' },
    ];

    return {
        isOpen,
        handleOpenModal,
        handleCloseModal,
        expensesData,
        control,
        onSubmit,
        handleReset,
        statusOptions,
    };
};