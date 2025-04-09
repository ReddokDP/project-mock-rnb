import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: { username: string } | null;
}

const storedUser = localStorage.getItem('user');

const initialState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: { username: string } }>) {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logOut(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
    selectors: {
        selectUser: (state: AuthState) => state.user,
    }
});

export const { setUser, logOut } = authSlice.actions;
export const { selectUser } = authSlice.selectors
export default authSlice.reducer;