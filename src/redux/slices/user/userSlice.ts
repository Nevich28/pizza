import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserSlice = {
    isAuth: boolean;
    email: string | null;
    token: string | null;
    id: string | null;
    error: string | null;
};

type UserType = {
    email: string;
    id: string;
    token: string;
};

const initialState: UserSlice = {
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
        setUser(state, action: PayloadAction<UserType>) {
            state.isAuth = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.error = null;
        },
        setError(state, action: PayloadAction<UserSlice['id']>) {
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
