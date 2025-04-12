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

interface StatusOption {
    id: string;
    value: string;
}

export const useModalFilter = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(selectorIsOpen);
    const expensesData = useSelector(selectorExpensesData);

    const initialValuesInputs = {
        customerId: '',
        contractNumber: '',
        asset: '',
        startDate: '',
        endDate: '',
        status: '',
    }

    const { control, handleSubmit, reset, getValues } = useForm<ExpensesData>({
        defaultValues: expensesData || initialValuesInputs,
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(() => {
        const currentData = getValues();
        dispatch(setModalData(currentData));
        dispatch(closeModalFilter());
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
        { id: '1', value: 'Новый' },
        { id: '2', value: 'Завершена' },
        { id: '3', value: 'Отменена' },
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