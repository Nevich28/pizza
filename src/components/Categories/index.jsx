import { useState } from 'react';

// const categoryesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

const CategoryItem = ({ title, itemSelect, isActive = false }) => {
    return (
        <li
            className={`${
                isActive ? 'bg-dark-gray text-white' : 'bg-light-gray text-font-black'
            } py-4 px-9 mb-3 rounded-full text-base font-bold hover:brightness-75 transition-all delay-100 cursor-pointer`}
            onClick={itemSelect}>
            {title}
        </li>
    );
};

export const Categories = ({ items }) => {
    const categories = [...new Set(items.map((item) => item.category))];
    categories.unshift('All');
    const [isSelected, setIsSelected] = useState(categories[0]);
    return (
        <ul className=" flex space-x-4 flex-wrap">
            {categories.map((item, i) => (
                <CategoryItem
                    isActive={isSelected === item ? true : false}
                    itemSelect={() => setIsSelected(item)}
                    key={i}
                    title={item}
                />
            ))}
        </ul>
    );
};
