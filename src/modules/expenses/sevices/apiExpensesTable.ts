import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid'

const URL = 'http://localhost:3000/api/';
const UID = uuidv4();

export const apiExpensesTable = createApi({
    reducerPath: 'expensesService',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Content-Type', 'application/json');
            headers.set('x-request-uuid', UID);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getData: builder.mutation({
            query: (credentials) => {
                return {
                    url: 'tax/operations',
                    method: 'POST',
                    body: {
                        ...credentials,
                        requestInfo: {
                            id: UID,
                            dateTime: new Date().toISOString(),
                            sourceId: 'WEB_CLIENT',
                        },
                    },
                };
            },
        }),
    }),
})

export const { useGetDataMutation } = apiExpensesTable;