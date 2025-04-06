import { useDispatch } from 'react-redux';
import { setDataFilter } from '../../modals/slice/modalFilterSlice';
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
        dispatch(setDataFilter(initialData));
    };
    return {
        handleOpenModal
    }
}