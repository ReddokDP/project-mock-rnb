import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: { username: string } | null;
}

interface UIState {
    showLogout: boolean;
}

interface combinedState {
    auth: AuthState;
    ui: UIState;
}

const storedUser = localStorage.getItem('user');

const initialState: combinedState = {
    auth: { user : storedUser ? JSON.parse(storedUser) : null },
    ui: { showLogout: false },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: { username: string } }>) {
            state.auth.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.auth.user));
        },
        logOut(state) {
            state.auth.user = null;
            localStorage.removeItem('user');
        },
        setShowLogout: (state, action: PayloadAction<boolean>) => {
            state.ui.showLogout = action.payload;
        }
    },
    selectors: {
        selectUser: (state: combinedState) => state.auth.user,
        selectLogOut: (state: combinedState) => state.ui.showLogout,
    }
});

export const { setUser, logOut, setShowLogout } = authSlice.actions;
export const { selectUser, selectLogOut } = authSlice.selectors
export default authSlice.reducer;