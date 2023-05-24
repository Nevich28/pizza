import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setCategory } from '../../redux/slices/filterSlice';
import Skeleton from './Skeleton';

const CategoryItem = ({ title, itemSelect, isActive = false }) => {
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

export const Categories = ({ items = [], loading }) => {
    const dispatch = useDispatch();
    const categories = [...new Set(items.map((item) => item.category))];
    categories.unshift('All');
    const isSelected = useSelector(selectCategory);

    return (
        <ul className="flex flex-wrap">
            {loading === 'loading' &&
                [...new Array(5)].map((_, i) => <Skeleton key={i} className=" mr-4" />)}
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
};
