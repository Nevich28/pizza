import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItemsForCategory = createAsyncThunk('pizza/fetchItems', async (url) => {
    const { data } = await axios.get(url);
    return data;
});

const initialState = {
    items: [],
    statusLoadingCategory: 'loading',
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsForCategory.pending, (state) => {
                state.statusLoadingCategory = 'loading';
            })
            .addCase(fetchItemsForCategory.fulfilled, (state, action) => {
                state.items = action.payload;
                state.statusLoadingCategory = 'success';
            })
            .addCase(fetchItemsForCategory.rejected, (state) => {
                state.statusLoadingCategory = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

//selectors

export const selectCategorysItems = (state) => state.pizza;
