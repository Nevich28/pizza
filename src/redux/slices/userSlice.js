import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuth = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        removeUser() {
            return initialState;
        },
    },
});

export const { setUser, removeUser, setError } = userSlice.actions;

export default userSlice.reducer;

//selectors

export const selectUser = (state) => state.user;
