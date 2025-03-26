import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: { username: string } | null;
}

const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<{ user: { username: string } }>) {
            state.user = action.payload.user;
        },
        logOut(state) {
            state.user = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;