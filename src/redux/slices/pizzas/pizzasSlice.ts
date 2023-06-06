import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizzas } from '../../../@types/pizzas';
import { Status } from '../../../@types/status';

export const fetchItemsForCategory = createAsyncThunk<Pizzas[], string>(
    'pizza/fetchItems',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
);

type PizzaSlice = {
    items: Pizzas[];
    statusLoadingCategory: Status;
};

const initialState: PizzaSlice = {
    items: [],
    statusLoadingCategory: 'loading',
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
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

// export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

//selectors

// export const selectCategorysItems = (state) => state.pizza;
