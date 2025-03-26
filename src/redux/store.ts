import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService';
import authReducer from './slice/authSlice';
import uiReducer from './slice/uiSlice';
import cardsReducer from './slice/cardSlice';

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: authReducer,
        ui: uiReducer,
        cards: cardsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
export type RootState = ReturnType<typeof store.getState>;