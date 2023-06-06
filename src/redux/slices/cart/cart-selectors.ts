import { RootState } from '../../store';

export const selectCartItems = (state: RootState) => state.cart;
export const selectCount = (id: string) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id);
