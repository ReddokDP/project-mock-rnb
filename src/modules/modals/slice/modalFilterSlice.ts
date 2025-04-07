import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalData {
    customerId: number | null;
    contractNumber: number | null;
    asset: string;
    startDate: number | null;
    endDate: number | null;
    status: string;
}

interface ModalState {
    isOpen: boolean;
    modalData: ModalData | null;
}

const initialState: ModalState = {
    isOpen: false,
    modalData: null,
};

const modalFilterSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalFilter: (state) => {
            state.isOpen = true;
        },
        closeModalFilter: (state) => {
            state.isOpen = false;
        },
        setModalData: (state, action: PayloadAction<ModalData>) => {
            state.modalData = action.payload;
        },
    },
});

export const { openModalFilter, closeModalFilter, setModalData } = modalFilterSlice.actions;
export default modalFilterSlice.reducer;