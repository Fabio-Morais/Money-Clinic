import { createSlice } from '@reduxjs/toolkit';

// project imports
import config from 'config';

const initialCustomizationState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    test: 'example'
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationSlice = createSlice({
    name: 'customization',
    initialState: initialCustomizationState,
    reducers: {
        menuOpen(state, action) {
            state.isOpen = [action.payload];
        },
        setMenu(state, action) {
            state.opened = action.payload;
        },
        setFontFamily(state, action) {
            state.fontFamily = action.payload;
        },
        setBorderRadius(state, action) {
            state.borderRadius = action.payload;
        }
    }
});

export const customizationActions = customizationSlice.actions;
export default customizationSlice.reducer;
