import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService';
import authReducer from './slice/authSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;