import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:3000/api/';

export const apiService = createApi({
    reducerPath: 'authService',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        registration: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register/',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            }),
        }),
    }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation  } = apiService;