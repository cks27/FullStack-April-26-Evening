import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (pageNo) => {
    console.log(pageNo);
    const res = await fetch('https://dummyjson.com/prodcts');
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null
    },
    reducers: {
        // We can only write functions as reducers which are - 
        // 1. Pure function 
        // 2. Synchrounous 
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
    }
});

export default productsSlice.reducer;