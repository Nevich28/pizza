import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Order } from '../../../@types/orders';
import { Status } from '../../../@types/status';
import { UserSlice } from '../user/userSlice';

export const fetchCompletedOrders = createAsyncThunk<Order[], UserSlice['id']>(
    'completedOrders/fetchCompletedOrders',
    async (userId) => {
        const { data } = await axios.get(
            `https://646497be043c103502bd6388.mockapi.io/Orders?userId=${userId}`,
        );
        return data;
    },
);

type CompletedOrdersSlice = {
    items: Order[];
    statusLoading: Status;
};

const initialState: CompletedOrdersSlice = {
    items: [],
    statusLoading: 'loading',
};

export const completedOrdersSlice = createSlice({
    name: 'completedOrders',
    initialState,
    reducers: {},
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

export default completedOrdersSlice.reducer;

//selectors
