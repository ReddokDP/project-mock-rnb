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
        openModalFilter: (state, action: PayloadAction<ModalData | undefined>) => {
            state.isOpen = true;
            state.modalData = action.payload || null;
        },
        closeModalFilter: (state) => {
            state.isOpen = false;
            state.modalData = null;
        },
    },
});

export const { openModalFilter, closeModalFilter } = modalFilterSlice.actions;
export default modalFilterSlice.reducer;