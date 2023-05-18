// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/filterSlice';

// const categoryesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

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

export const Categories = ({ items, filterCategory }) => {
    const dispatch = useDispatch();
    const categories = [...new Set(items.map((item) => item.category))];
    categories.unshift('All');
    const isSelected = useSelector((state) => state.filter.category);
    // const [isSelected, setIsSelected] = useState(categories[0]);
    // const handleCategory = (item) => {
    //     if (item !== isSelected) {
    //         // setIsSelected(item);
    //         // filterCategory(item);
    //         dispatch(setCategory(item));
    //     }
    // };
    return (
        <ul className=" flex flex-wrap">
            {categories.map((item, i) => (
                <CategoryItem
                    isActive={isSelected === item ? true : false}
                    itemSelect={() => dispatch(setCategory(item))}
                    key={i}
                    title={item}
                />
            ))}
        </ul>
    );
};
