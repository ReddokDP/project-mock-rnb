import { useDispatch, useSelector } from 'react-redux';
import { closeModalFilter, openModalFilter, setModalData, selectorModalData, selectorIsOpen } from '../slice/modalFilterSlice';
import { useForm } from 'react-hook-form';
import { ModalData } from '../slice/modalFilterSlice';

interface StatusOption {
    id: string;
    value: string;
}

export const useModalFilter = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(selectorIsOpen);
    const modalData = useSelector(selectorModalData);

    const { control, handleSubmit, reset, getValues } = useForm<ModalData>({
        defaultValues: modalData || {
            customerId: '',
            contractNumber: '',
            asset: '',
            startDate: '',
            endDate: '',
            status: '',
        },
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
        reset({
            customerId: '',
            contractNumber: '',
            asset: '',
            startDate: '',
            endDate: '',
            status: '',
        });
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
        modalData,
        control,
        onSubmit,
        handleReset,
        statusOptions,
    };
};