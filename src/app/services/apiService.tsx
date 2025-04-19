import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

const URL = 'http://localhost:3000/api/';

export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
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
            }),
        }),
        getData: builder.mutation({
            query: (credentials) => {
                const requestId = uuidv4()
                return {
                    url: 'tax/operations',
                    method: 'POST',
                    headers: {
                        'x-request-uuid': requestId,
                    },
                    body: {
                        ...credentials,
                        requestInfo: {
                            id: requestId,
                            dateTime: new Date().toISOString(),
                            sourceId: 'WEB_CLIENT',
                        },
                    },
                };
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useLogoutMutation,
    useGetDataMutation,
} = apiService;
