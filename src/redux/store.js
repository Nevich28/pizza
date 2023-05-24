import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzasSlice';
import modalSlice from './slices/modalSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizza: pizzaSlice,
        modal: modalSlice,
        user: userSlice,
    },
});
