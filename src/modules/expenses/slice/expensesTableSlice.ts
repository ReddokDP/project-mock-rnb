import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExpenseItem {
    id: string;
    customerId: string;
    contractNumber: string;
    asset: string;
    startDate: string;
    endDate: string;
    status: string;
}

interface ExpensesTableState {
    items: ExpenseItem[];
}

const initialState: ExpensesTableState = {
    items: [],
};

const expensesTableSlice = createSlice({
    name: 'expensesTable',
    initialState,
    reducers: {
        setTableExpenses: (state, action: PayloadAction<ExpenseItem[]>) => {
            state.items = action.payload;
        },
    },
    selectors: {
        selectExpenses: (state: ExpensesTableState) => state.items,
    },
});

export const { setTableExpenses } = expensesTableSlice.actions;
export const { selectExpenses } = expensesTableSlice.selectors;
export default expensesTableSlice.reducer;