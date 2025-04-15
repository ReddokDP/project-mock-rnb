import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../../modules/user/services/apiService';
import authReducer from '../../modules/user/slice/authSlice';
import expensesFilterReducer from '../../modules/expenses/slice/expensesSlice';
import expensesTableReducer from '../../modules/expenses/slice/expensesTableSlice';
import { apiExpensesTable } from '../../modules/expenses/sevices/apiExpensesTable';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        [apiExpensesTable.reducerPath]: apiExpensesTable.reducer,
        auth: authReducer,
        expensesFilter: expensesFilterReducer,
        expensesTable: expensesTableReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware).concat(apiExpensesTable.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
