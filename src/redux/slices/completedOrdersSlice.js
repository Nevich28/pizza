import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCompletedOrders = createAsyncThunk(
    'completedOrders/fetchCompletedOrders',
    async (userId) => {
        const { data } = await axios.get(
            `https://646497be043c103502bd6388.mockapi.io/Orders?userId=${userId}`,
        );
        return data;
    },
);

const initialState = {
    items: [],
    statusLoading: 'loading',
};

export const completedOrdersSlice = createSlice({
    name: 'completedOrders',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompletedOrders.pending, (state) => {
                state.statusLoading = 'loading';
            })
            .addCase(fetchCompletedOrders.fulfilled, (state, action) => {
                state.items = action.payload;
                state.statusLoading = 'success';
            })
            .addCase(fetchCompletedOrders.rejected, (state) => {
                state.statusLoading = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = completedOrdersSlice.actions;

export default completedOrdersSlice.reducer;

//selectors

export const selectItems = (state) => state.completedOrders;
