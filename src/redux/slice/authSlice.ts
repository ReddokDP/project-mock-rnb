import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    user: { username: string } | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<{ token: string; user: { username: string } }>) {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;