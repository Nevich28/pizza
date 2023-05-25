import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

import { CartItem } from '../components/CartItem';
import { EmptyCart } from '../components/EmptyCart';
import {
    addItemFromCart,
    clearItem,
    removeItemFromCart,
    removeItemsFromCart,
    selectCartItems,
} from '../redux/slices/cartSlice';
import { showModal, toOrderOn } from '../redux/slices/modalSlice';
import { selectUser } from '../redux/slices/userSlice';

const CartHead = ({ onClear }) => (
    <div className="flex justify-between items-center">
        <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000000"
                className=" w-8 h-8 mr-4">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
            </svg>
            <h2 className=" text-3xl font-bold">Cart</h2>
        </div>
        <div onClick={onClear} className=" group/clear flex items-center cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#B6B6B6"
                className="w-5 h-5 mr-2 group-hover/clear:stroke-gray-600 transition">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
            <p className=" text-base font-normal text-[#B6B6B6] group-hover/clear:text-gray-600 transition">
                Clear cart
            </p>
        </div>
    </div>
);

const CartFoot = ({ totalPrice, totalCount, handlePlaceOrder }) => (
    <div className=" mt-10">
        <div className="flex flex-col md:flex-row justify-between text-xl font-normal">
            <span className=" mb-3 md:m-0">
                Total pizzas: <span className=" font-bold">{totalCount} pcs.</span>
            </span>
            <p>
                Order amount:<span className=" font-bold text-main-orange"> {totalPrice} $</span>
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-xl font-normal mt-10">
            <BackButton />
            <button
                onClick={handlePlaceOrder}
                className="rounded-full py-3 px-9 bg-main-orange text-white hover:bg-orange-500 transition">
                Confirm the order
            </button>
        </div>
    </div>
);

export const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const { isAuth } = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClearCart = () => {
        dispatch(clearItem());
    };

    const onAddItem = (id) => {
        dispatch(addItemFromCart(id));
    };

    const onRemoveItem = (id, count) => {
        if (count > 1) dispatch(removeItemFromCart(id));
    };

    const onRemoveItems = (id) => {
        dispatch(removeItemsFromCart(id));
    };

    const handlePlaceOrder = () => {
        if (isAuth) {
            navigate('/order');
        } else {
            dispatch(toOrderOn());
            dispatch(showModal());
        }
    };

    return (
        <div className=" lg:w-[80%] xl:w-[60%] mx-auto my-24">
            {cartItems.items.length > 0 ? (
                <>
                    <CartHead onClear={onClearCart} />
                    <div className="w-full">
                        {cartItems.items.map((item) => (
                            <CartItem
                                onAddItem={onAddItem}
                                onRemoveItem={onRemoveItem}
                                onRemoveItems={onRemoveItems}
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>
                    <CartFoot {...cartItems} handlePlaceOrder={handlePlaceOrder} />
                </>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
};
