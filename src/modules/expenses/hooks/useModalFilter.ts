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
import { useGetDataMutation } from '../../../app/services/apiService';
import { setTableExpenses } from '../slice/expensesTableSlice';
import { StatusOption, RequestPayload, FormData, InputValues } from '../types/typesModalFilter';

const initialValuesInputs: InputValues = {
    clientId: '',
    assetId: '',
    clientContractId: '',
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

    const onSubmit = handleSubmit(
        async ({ clientId, assetId, clientContractId, startDate, endDate, status }: FormData) => {
            try {
                const requestPayload: RequestPayload = {
                    clientId: clientId || '',
                    assetId: assetId || '',
                    clientContractId: clientContractId || '',
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
        },
    );

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