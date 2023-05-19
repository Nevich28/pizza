import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
};

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
        clearItem() {
            return initialState;
        },
    },
});

export const {
    addItem,
    removeItem,
    clearItem,
    addItemFromCart,
    removeItemFromCart,
    removeItemsFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
