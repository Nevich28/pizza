import { RootState } from '../../store';

export const selectModal = (state: RootState) => state.modal.showModal;
export const selectToOrder = (state: RootState) => state.modal.toOrderOpen;
