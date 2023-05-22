import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '../redux/slices/filterSlice';
import { fetchItemsForCategory } from '../redux/slices/pizzasSlice';

export const Home = () => {
    const dispatch = useDispatch();
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
    } = useSelector((state) => state.filter);
    const { items } = useSelector((state) => state.pizza);
    const statusCategory = useSelector((state) => state.pizza.statusLoadingCategory);

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
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters(params));
            isSearch.current = true;
        }
        dispatch(fetchItemsForCategory(`https://646497be043c103502bd6388.mockapi.io/pizzaitems?`));
    }, []);
    //если был первый рендер запрашиваем данные
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;
    }, [category, sortProperty, sortDirection, currentPage, searchValue]);

    //Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty,
                category,
                currentPage,
                sortDirection,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [category, sortProperty, sortDirection, currentPage]);

    return (
        <>
            <div className="flex items-center justify-between mt-10 flex-wrap">
                <Categories loading={statusCategory} items={items} />
                <Search />
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
