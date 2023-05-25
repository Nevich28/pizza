import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
    placeOrderStatus: 'idle',
    placeOrderkey: false,
    placeOrderid: null,
};

export const postOrder = createAsyncThunk('cart/postOrder', async (data) => {
    const res = await axios.post('https://646497be043c103502bd6388.mockapi.io/Orders', data);
    return res;
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItems = state.items.find((obj) => obj.id === action.payload.id);
            if (findItems) {
                findItems.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = state.items
                .reduce((sum, obj) => {
                    return parseFloat(obj.price) * obj.count + sum;
                }, 0)
                .toFixed(2);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        addItemFromCart(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            findItem.count++;
            state.totalPrice = state.items
                .reduce((sum, obj) => {
                    return parseFloat(obj.price) * obj.count + sum;
                }, 0)
                .toFixed(2);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        removeItemFromCart(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            findItem.count--;
            state.totalPrice = state.items
                .reduce((sum, obj) => {
                    return parseFloat(obj.price) * obj.count + sum;
                }, 0)
                .toFixed(2);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        removeItemsFromCart(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items
                .reduce((sum, obj) => {
                    return parseFloat(obj.price) * obj.count + sum;
                }, 0)
                .toFixed(2);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },
        removeItem(state, action) {
            state.items.filter((obj) => obj.id !== action.payload);
        },
        resetOrderkey(state) {
            state.placeOrderkey = false;
        },
        clearItem() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postOrder.pending, (state) => {
                state.placeOrderStatus = 'loading';
            })
            .addCase(postOrder.fulfilled, (state, action) => {
                state.placeOrderStatus = 'success';
                state.placeOrderkey = true;
                state.items = [];
                state.totalCount = 0;
                state.totalPrice = 0;
                state.placeOrderid = action.payload.data.id;
            })
            .addCase(postOrder.rejected, (state) => {
                state.placeOrderStatus = 'error';
            });
    },
});

export const {
    addItem,
    removeItem,
    clearItem,
    addItemFromCart,
    removeItemFromCart,
    removeItemsFromCart,
    resetOrderkey,
} = cartSlice.actions;

export default cartSlice.reducer;

//selectors

export const selectCartItems = (state) => state.cart;
export const selectCount = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
