import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    showLogout: boolean;
}

const initialState: UIState = {
    showLogout: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setShowLogout: (state, action: PayloadAction<boolean>) => {
            state.showLogout = action.payload;
        },
    },
});

export const { setShowLogout } = uiSlice.actions;
export default uiSlice.reducer;