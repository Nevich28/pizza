import React from 'react';
import { useSelector } from 'react-redux';
import { Pizzas } from '../../@types/pizzas';
import { setCategory } from '../../redux/slices/filter/filterSlice';
import { selectCategory } from '../../redux/slices/filter/filter-selectors';
import { useAppDispatch } from '../../redux/store';
import Skeleton from './Skeleton';

type CategoryItemProps = {
    title: string;
    itemSelect: React.MouseEventHandler<HTMLLIElement>;
    isActive: boolean;
};

const CategoryItem = ({ title, itemSelect, isActive = false }: CategoryItemProps) => {
    return (
        <li
            className={`${
                isActive ? 'bg-dark-gray text-white' : 'bg-light-gray text-font-black'
            } py-4 px-9 mb-3 mr-4 rounded-full text-base font-bold hover:brightness-75 transition-all delay-100 cursor-pointer`}
            onClick={itemSelect}>
            {title}
        </li>
    );
};

type CategoriesProps = {
    items: Pizzas[];
    loading: string;
};

export const Categories = React.memo(({ items = [], loading }: CategoriesProps) => {
    // useWhyDidYouUpdate('Categories', { items, loading });
    const dispatch = useAppDispatch();
    const categories = [...new Set(items.map((item) => item.category))];
    categories.unshift('All');
    const isSelected = useSelector(selectCategory);

    return (
        <ul className="flex flex-wrap">
            {loading === 'loading' &&
                [...new Array(5)].map((_, i) => <Skeleton key={i} className="mr-4" />)}
            {loading === 'success' &&
                categories.map((item, i) => (
                    <CategoryItem
                        key={i}
                        isActive={isSelected === item ? true : false}
                        itemSelect={() => dispatch(setCategory(item))}
                        title={item}
                    />
                ))}
        </ul>
    );
});
