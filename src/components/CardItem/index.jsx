import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { addItem, selectCount } from '../../redux/slices/cartSlice';

export const CardItem = ({ id, title, imageUrl, types, sizes, addThiknessPrice, price }) => {
    const dispatch = useDispatch();

    const [thickness, setThickness] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [totalPrice, setTotalPrice] = useState(price[0]);
    const currentId = id + thickness + activeSize;
    const count = useSelector(selectCount(currentId));

    const onClickAdd = () => {
        const item = {
            id: id + thickness + activeSize,
            title,
            imageUrl,
            price: totalPrice,
            type: thickness,
            size: activeSize,
        };
        dispatch(addItem(item));
    };

    useEffect(() => {
        setTotalPrice(
            (
                parseFloat(price[sizes.indexOf(activeSize)]) +
                parseFloat(addThiknessPrice[types.indexOf(thickness)])
            ).toFixed(2),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSize, thickness]);

    return (
        <div>
            {/* <Link to={`/pizza/${id}`}> */}
            <img className="w-64 h-64 mx-auto" src={imageUrl} alt="title" />
            {/* </Link> */}
            <h3 className=" text-xl font-extrabold text-center mt-3">{title}</h3>
            <div className="mt-5 bg-[#F3F3F3] w-full rounded-[10px] p-2">
                <div className="flex justify-between">
                    {types.map((item, i) => (
                        <button
                            className={` py-3 w-[48%] rounded-md text-sm font-bold  ${
                                thickness === item
                                    ? 'bg-[#FFFFFF] text-font-black shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
                                    : 'hover:bg-[rgba(255,255,255,0.3)] hover:text-font-black text-gray-300'
                            }`}
                            key={i}
                            onClick={() => setThickness(item)}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-[repeat(3,minmax(90px,1fr))] mt-2">
                    {sizes.map((item, i) => (
                        <button
                            className={`py-3 w-full rounded-md text-sm font-bold  ${
                                activeSize === item
                                    ? 'bg-[#FFFFFF] text-font-black shadow-[0_2px_4px_rgba(0,0,0,0.04)]'
                                    : 'hover:bg-[rgba(255,255,255,0.3)] hover:text-font-black text-gray-300'
                            }`}
                            key={i}
                            onClick={() => setActiveSize(item)}>
                            {item} cm.
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex mt-4 items-center justify-between">
                <span className=" text-xl font-bold">{totalPrice} $</span>
                <button
                    className=" group/button flex h-10 px-2 items-center border border-main-orange rounded-full text-base font-bold text-main-orange hover:bg-main-orange hover:text-white"
                    onClick={onClickAdd}>
                    + Add to Cart
                    {count && (
                        <div className=" group-hover/button:bg-white group-hover/button:text-main-orange bg-main-orange rounded-full h-[22px] w-[22px] flex items-center justify-center text-white text-xs font-bold ml-2">
                            {count.count}
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};
