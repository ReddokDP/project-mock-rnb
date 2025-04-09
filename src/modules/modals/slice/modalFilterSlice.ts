import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalData {
    customerId: string;
    contractNumber: string;
    asset: string;
    startDate: string;
    endDate: string;
    status: string;
}

interface ModalState {
    isOpen: boolean;
    modalData: ModalData | undefined;
}

const initialState: ModalState = {
    isOpen: false,
    modalData: undefined,
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
    selectors: {
        selectorModalData: (state: ModalState) => state.modalData,
        selectorIsOpen: (state: ModalState) => state.isOpen,
    },
});

export const { openModalFilter, closeModalFilter, setModalData } = modalFilterSlice.actions;
export const { selectorModalData, selectorIsOpen} = modalFilterSlice.selectors
export default modalFilterSlice.reducer;