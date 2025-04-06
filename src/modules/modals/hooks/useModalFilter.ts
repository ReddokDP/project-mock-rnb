import { useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RootState } from '../../../redux/store';
import { ModalData } from '../slice/modalFilterSlice';
import { useShowFilterModal } from './useShowFilterModal';

interface StatusOption {
    id: string;
    value: string;
}

const selectorModalData = (state: RootState) => state.modal.modalData;

export const useModalFilter = () => {
    const { closeModal } = useShowFilterModal();

    const modalData = useSelector(selectorModalData);

    const { control, handleSubmit, reset } = useForm<ModalData>({
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

    const onSubmit: SubmitHandler<ModalData> = () => {
        closeModal();
        reset();
    };

    const handleReset = (): void => {
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
        modalData,
        control,
        handleSubmit,
        onSubmit,
        handleReset,
        statusOptions,
    };
};