import { RootState } from '../../store';

export const selectFilters = (state: RootState) => state.filter;
export const selectCategory = (state: RootState) => state.filter.category;
