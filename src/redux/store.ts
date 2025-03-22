import { configureStore } from '@reduxjs/toolkit';
import { apiService } from '../services/apiService';
import authReducer from './slice/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;