import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { Categories } from '../components/Categories';
import { CardItem } from '../components/CardItem';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/CardItem/Skeleton';
import { convertSortValue } from '../helpers/helpers';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';
import {
    setCurrentPage,
    setFilters,
    fetchFilteredItems,
    fetchAllItemsForPage,
    Filters,
} from '../redux/slices/filter/filterSlice';
import { fetchItemsForCategory } from '../redux/slices/pizzas/pizzasSlice';
import { selectCategorysItems } from '../redux/slices/pizzas/pizzas-selectors';
import { useAppDispatch } from '../redux/store';
import { selectFilters } from '../redux/slices/filter/filter-selectors';

export const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const {
        category,
        sortProperty,
        sortDirection,
        searchValue,
        currentPage,
        pageCount,
        statusLoadingFiltered,
        filteredItems,
    } = useSelector(selectFilters);
    const { items, statusLoadingCategory } = useSelector(selectCategorysItems);
    // const statusCategory = useSelector((state) => state.pizza.statusLoadingCategory);

    const fetchPizzas = async () => {
        const cat = category === 'All' ? '' : `category=${category}&`;
        const sortVal = sortProperty && `sortBy=${convertSortValue(sortProperty)}&`;
        const sortDir = sortDirection ? 'order=asc&' : 'order=desc&';
        const search = searchValue && `search=${searchValue}&`;

        dispatch(
            fetchFilteredItems(
                `https://646497be043c103502bd6388.mockapi.io/pizzaitems?page=${currentPage}&limit=4&${cat}${sortVal}${sortDir}${search}`,
            ),
        );
        dispatch(
            fetchAllItemsForPage(
                `https://646497be043c103502bd6388.mockapi.io/pizzaitems?${cat}${sortVal}${sortDir}${search}`,
            ),
        );
    };

    //если в адресной строке есть параметры поиска
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as Filters;
            dispatch(setFilters(params));
            isSearch.current = true;
        }
        dispatch(fetchItemsForCategory(`https://646497be043c103502bd6388.mockapi.io/pizzaitems?`));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //если был первый рендер запрашиваем данные
    useEffect(() => {
        // window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortProperty, sortDirection, currentPage, searchValue]);

    //Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty,
                category,
                currentPage,
                sortDirection,
                // searchValue,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortProperty, sortDirection, currentPage, searchValue]);

    return (
        <>
            <div className="flex items-center justify-between mt-10 flex-wrap">
                <Categories loading={statusLoadingCategory} items={items} />
                {category === 'All' && <Search />}

                <Sort />
            </div>
            <h2 className="text-3xl font-bold mt-7 auto-rows-auto">All pizzas</h2>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
                {statusLoadingFiltered === 'loading' &&
                    [...new Array(4)].map((_, i) => <Skeleton key={i} className=" mx-auto" />)}
                {statusLoadingFiltered === 'success' &&
                    filteredItems.map((item) => <CardItem key={item.id} {...item} />)}
                {statusLoadingFiltered === 'error' && <p>Loading error</p>}
            </div>
            <Pagination
                pageCount={pageCount}
                activePage={currentPage}
                onChangePage={(number) => dispatch(setCurrentPage(number))}
            />
        </>
    );
};
