import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const LoginQuery = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'http://localhost:3000/api/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = LoginQuery;