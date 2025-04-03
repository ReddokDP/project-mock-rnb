import { useDispatch } from 'react-redux';
import { openModalFilter } from '../../modals/slice/modalFilterSlice';
import { ModalData } from '../../modals/slice/modalFilterSlice';

export const useOpenModalFilter = () => {
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        const initialData: ModalData = {
            customerId: null,
            contractNumber: null,
            asset: '',
            startDate: null,
            endDate: null,
            status: '',
        };

        dispatch(openModalFilter(initialData));
    };

    return {
        handleOpenModal
    }
}