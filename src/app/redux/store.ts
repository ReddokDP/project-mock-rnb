import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService';
import authReducer from '../../modules/user/slice/authSlice';
import expensesFilterReducer from '../../modules/expenses/slice/expensesSlice';
import expensesTableReducer from '../../modules/expenses/slice/expensesTableSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        expensesFilter: expensesFilterReducer,
        expensesTable: expensesTableReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
