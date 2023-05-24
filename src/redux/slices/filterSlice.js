import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilteredItems = createAsyncThunk('filters/fetchFilteredItems', async (url) => {
    const { data } = await axios.get(url);
    return data;
});

export const fetchAllItemsForPage = createAsyncThunk(
    'filters/fetchAllItemsForPage',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
);

const initialState = {
    category: 'All',
    sortProperty: 'popularity',
    sortDirection: true,
    searchValue: '',
    currentPage: 1,
    pageCount: 0,
    statusLoadingFiltered: 'loading',
    filteredItems: [],
    allItemsForPage: [],
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredItems.fulfilled, (state, action) => {
                state.filteredItems = action.payload;
                state.statusLoadingFiltered = 'success';
            })
            .addCase(fetchAllItemsForPage.fulfilled, (state, action) => {
                state.pageCount = Math.ceil(action.payload.length / 4);
                state.statusLoadingFiltered = 'success';
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.statusLoadingFiltered = 'loading';
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state) => {
                    state.statusLoadingFiltered = 'error';
                },
            );
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

//selectors

export const selectFilters = (state) => state.filter;
export const selectCategory = (state) => state.filter.category;
