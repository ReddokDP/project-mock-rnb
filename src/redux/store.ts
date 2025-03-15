import { configureStore } from '@reduxjs/toolkit';
import { LoginQuery } from '../../Query/LoginQuery'

export const store = configureStore({
    reducer: {
        [LoginQuery.reducerPath]: LoginQuery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(LoginQuery.middleware),
});
