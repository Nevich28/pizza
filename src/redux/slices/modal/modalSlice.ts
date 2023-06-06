import { createSlice } from '@reduxjs/toolkit';

type ModalSlice = {
    showModal: boolean;
    toOrderOpen: boolean;
};

const initialState: ModalSlice = {
    showModal: false,
    toOrderOpen: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.showModal = true;
        },
        hideModal(state) {
            state.showModal = false;
        },
        toOrderOn(state) {
            state.toOrderOpen = true;
        },
        toOrderOff(state) {
            state.toOrderOpen = false;
        },
    },
});

export const { showModal, hideModal, toOrderOn, toOrderOff } = modalSlice.actions;

export default modalSlice.reducer;

//selectors
