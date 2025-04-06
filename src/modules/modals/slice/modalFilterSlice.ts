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
    modalData: ModalData | null;
}

const initialState: ModalState = {
    modalData: null,
};

const modalFilterSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDataFilter: (state, action: PayloadAction<ModalData | undefined>) => {
            state.modalData = action.payload || null;
        },
    },
});

export const { setDataFilter } = modalFilterSlice.actions;
export default modalFilterSlice.reducer;