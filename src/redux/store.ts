import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import filterSlice from './slices/filter/filterSlice';
import cartSlice from './slices/cart/cartSlice';
import pizzaSlice from './slices/pizzas/pizzasSlice';
import modalSlice from './slices/modal/modalSlice';
import userSlice from './slices/user/userSlice';
import completedOrdersSlice from './slices/completedOrders/completedOrdersSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
    modal: modalSlice,
    user: userSlice,
    completedOrders: completedOrdersSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['orders'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    'cart/postOrder/fulfilled',
                ],
            },

            // serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// export const store = configureStore({
//     reducer: {
//         filter: filterSlice,
//         cart: cartSlice,
//         pizza: pizzaSlice,
//         modal: modalSlice,
//         user: userSlice,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 // Ignore these action types
//                 ignoredActions: ['cart/postOrder/fulfilled'],
//                 // Ignore these field paths in all actions
//                 // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
//                 // // Ignore these paths in the state
//                 // ignoredPaths: ['items.dates'],
//             },
//         }),
// });
