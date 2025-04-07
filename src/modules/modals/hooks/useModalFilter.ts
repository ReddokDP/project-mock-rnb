import { useDispatch, useSelector } from 'react-redux';
import { closeModalFilter, openModalFilter, setModalData } from '../slice/modalFilterSlice';
import { useForm } from 'react-hook-form';
import { RootState } from '../../../redux/store';
import { ModalData } from '../slice/modalFilterSlice';

interface StatusOption {
    id: string;
    value: string;
}

const selectorModalData = (state: RootState) => state.modal.modalData;
const selectorIsOpen = (state: RootState) => state.modal.isOpen;

export const useModalFilter = () => {
    const dispatch = useDispatch();

    const isOpen = useSelector(selectorIsOpen);
    const modalData = useSelector(selectorModalData);

    const { control, handleSubmit, reset, getValues } = useForm<ModalData>({
        defaultValues: modalData || {
            customerId: null,
            contractNumber: null,
            asset: '',
            startDate: null,
            endDate: null,
            status: '',
        },
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(() => {
        const initialData: ModalData = {
            customerId: null,
            contractNumber: null,
            asset: '',
            startDate: null,
            endDate: null,
            status: '',
        };
        dispatch(setModalData(initialData))
        dispatch(closeModalFilter());
    });

    const handleOpenModal = () => {
        dispatch(openModalFilter());
        if (modalData) {
            reset(modalData);
        }
    };

    const handleCloseModal = () => {
        const currentData = getValues();
        dispatch(setModalData(currentData));
        dispatch(closeModalFilter());
    };

    const handleReset = () => {
        reset({
            customerId: null,
            contractNumber: null,
            asset: '',
            startDate: null,
            endDate: null,
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