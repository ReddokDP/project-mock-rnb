import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../../modules/user/services/apiService';
import authReducer from '../../modules/user/slice/authSlice';
import expensesFilterReducer from '../../modules/expenses/slice/expensesSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        expensesFilter: expensesFilterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
