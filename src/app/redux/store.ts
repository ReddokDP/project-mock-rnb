import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../../modules/user/services/apiService';
import authReducer from '../../modules/user/slice/authSlice';
import uiReducer from '../../modules/user/slice/uiSlice';
import modalFilterReducer from '../../modules/expenses/slice/modalFilterSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        ui: uiReducer,
        modal: modalFilterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
