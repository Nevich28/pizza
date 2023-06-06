import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizzas } from '../../../@types/pizzas';
import { Status } from '../../../@types/status';

export const fetchFilteredItems = createAsyncThunk<Pizzas[], string>(
    'filters/fetchFilteredItems',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
);

export const fetchAllItemsForPage = createAsyncThunk<Pizzas[], string>(
    'filters/fetchAllItemsForPage',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    },
);

type FilterSlice = {
    category: string;
    sortProperty: string;
    sortDirection: boolean;
    searchValue: string | '';
    currentPage: number;
    pageCount: number;
    statusLoadingFiltered: Status;
    filteredItems: Pizzas[];
    allItemsForPage: Pizzas[];
};

export type Filters = Pick<
    FilterSlice,
    'sortProperty' | 'category' | 'currentPage' | 'sortDirection'
>;

const initialState: FilterSlice = {
    category: 'All',
    sortProperty: 'popularity',
    sortDirection: true,
    searchValue: '',
    currentPage: 1,
    pageCount: 0,
    statusLoadingFiltered: 'success',
    filteredItems: [],
    allItemsForPage: [],
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
            state.currentPage = 1;
        },
        setSortProperty(state, action: PayloadAction<string>) {
            state.sortProperty = action.payload;
            state.currentPage = 1;
        },
        setSortDirection(state, action: PayloadAction<boolean>) {
            state.sortDirection = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setPageCount(state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        },
        setFilters(state, action: PayloadAction<Filters>) {
            state.currentPage = Number(action.payload.currentPage);
            state.sortProperty = action.payload.sortProperty;
            state.category = action.payload.category;
            state.sortDirection = action.payload.sortDirection;
            // state.searchValue = action.payload.searchValue;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredItems.fulfilled, (state, action) => {
                state.filteredItems = action.payload;
                // state.statusLoadingFiltered = 'success';
            })
            .addCase(fetchAllItemsForPage.fulfilled, (state, action) => {
                state.pageCount = Math.ceil(action.payload.length / 4);
                // state.statusLoadingFiltered = 'success';
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
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.statusLoadingFiltered = 'success';
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
