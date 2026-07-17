import { configureStore } from '@reduxjs/toolkit';
import productsSliceReducer from '../features/productSlice';

export const store = configureStore({
    reducer: {
        productsState: productsSliceReducer
    }
})