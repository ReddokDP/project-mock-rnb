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
    selectors: {
        selectLogOut: (state: UIState) => state.showLogout,
    }
});

export const { setShowLogout } = uiSlice.actions;
export const { selectLogOut } = uiSlice.selectors
export default uiSlice.reducer;