import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../../modules/auth/services/apiService';
import authReducer from '../../modules/auth/slice/authSlice';
import uiReducer from '../../modules/shared/slice/uiSlice';
import modalFilterReducer from '../../modules/modals/slice/modalFilterSlice';

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