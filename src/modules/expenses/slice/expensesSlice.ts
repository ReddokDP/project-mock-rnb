import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExpensesData {
    clientId: string;
    assetId: string;
    clientContractId: string;
    startDate: string;
    endDate: string;
    status: string;
}

interface ExpensesState {
    isOpen: boolean;
    expensesData: ExpensesData | undefined;
}

const initialState: ExpensesState = {
    isOpen: false,
    expensesData: undefined,
};

const expensesSlice = createSlice({
    name: 'expensesFilter',
    initialState,
    reducers: {
        openModalFilter: (state) => {
            state.isOpen = true;
        },
        closeModalFilter: (state) => {
            state.isOpen = false;
        },
        setModalData: (state, action: PayloadAction<ExpensesData>) => {
            state.expensesData = action.payload;
        },
    },
    selectors: {
        selectorExpensesData: (state: ExpensesState) => state.expensesData,
        selectorIsOpen: (state: ExpensesState) => state.isOpen,
    },
});

export const { openModalFilter, closeModalFilter, setModalData } = expensesSlice.actions;
export const { selectorExpensesData, selectorIsOpen} = expensesSlice.selectors
export default expensesSlice.reducer;