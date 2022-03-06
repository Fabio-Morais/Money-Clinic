import { configureStore } from '@reduxjs/toolkit';

// Reducer files
// eslint-disable-next-line import/no-named-as-default
import customizationReducer from './customizationSlice';

// ==============================|| REDUX - MAIN STORE ||============================== //
const store = configureStore({
    reducer: { customization: customizationReducer }
});

export default store;
