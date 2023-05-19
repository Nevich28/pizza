import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'All',
    sortProperty: 'popularity',
    sortDirection: true,
    searchValue: '',
    currentPage: 1,
    pageCount: 0,
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
            state.currentPage = 1;
        },
        setSortProperty(state, action) {
            state.sortProperty = action.payload;
            state.currentPage = 1;
        },
        setSortDirection(state, action) {
            state.sortDirection = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setPageCount(state, action) {
            state.pageCount = action.payload;
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            state.sortProperty = action.payload.sortProperty;
            state.category = action.payload.category;
            state.sortDirection = action.payload.sortDirection;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setCategory,
    setSortProperty,
    setSortDirection,
    setSearchValue,
    setCurrentPage,
    setPageCount,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
