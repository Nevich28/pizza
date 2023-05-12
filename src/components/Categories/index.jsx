const categoryesArr = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

const CategoryItem = ({ title, isActive = false }) => {
    return (
        <button
            className={`${
                isActive ? 'bg-dark-gray text-white' : 'bg-light-gray text-font-black'
            } py-4 px-9 mb-3 rounded-full text-base font-bold hover:brightness-75 transition-all delay-100`}>
            {title}
        </button>
    );
};

export const Categories = () => {
    return (
        <div className=" flex space-x-4 flex-wrap">
            {categoryesArr.map((item, i) => (
                <CategoryItem key={i} title={item} />
            ))}
        </div>
    );
};
