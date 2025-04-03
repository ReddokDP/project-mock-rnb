import { useDispatch, useSelector } from 'react-redux';
import { closeModalFilter } from '../slice/modalFilterSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RootState } from '../../../redux/store';
import { ModalData } from '../slice/modalFilterSlice';

interface StatusOption {
    id: string;
    value: string;
}

export const useModalFilter = () => {
    const dispatch = useDispatch();
    const { isOpen, modalData } = useSelector((state: RootState) => state.modal);

    const { register, handleSubmit, reset } = useForm<ModalData>({
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

    const onSubmit: SubmitHandler<ModalData> = (data) => {
        console.log(data);
        dispatch(closeModalFilter());
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
        isOpen,
        modalData,
        register,
        handleSubmit,
        onSubmit,
        handleReset,
        statusOptions,
        dispatch,
    };
};