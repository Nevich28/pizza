import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartButton } from '../CartButton/idex';
import { useDispatch, useSelector } from 'react-redux';

import Logo from './logo.png';
import { LoginBtn } from '../LoginBtn';
import { showModal } from '../../redux/slices/modalSlice';
import { selectCartItems } from '../../redux/slices/cartSlice';
import { removeUser, selectUser } from '../../redux/slices/userSlice';
import { AnimatePresence, motion } from 'framer-motion';

export const Header = () => {
    const dispatch = useDispatch();
    const { totalPrice, totalCount } = useSelector(selectCartItems);
    const { isAuth } = useSelector(selectUser);
    const location = useLocation();
    const [isOpened, setIsOpened] = useState(false);
    const menuRef = useRef();

    const MenuArr = ['Orders', 'Logout'];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(menuRef.current)) {
                setIsOpened(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMenuItem = (item) => {
        switch (item) {
            case 'Orders':
                setIsOpened(!isOpened);
                break;
            case 'Logout':
                dispatch(removeUser());
                setIsOpened(!isOpened);
                break;
            default:
                return;
        }
    };

    return (
        <>
            <div
                ref={menuRef}
                className="flex flex-col items-center sm:flex-row justify-between relative">
                <Link to="/" className=" flex items-center cursor-pointer mb-4 sm:mb-0">
                    <img className="w-11 h-11" src={Logo} alt="Logo" />
                    <div className=" flex flex-col ml-4">
                        <h1 className=" text-2xl font-extrabold">BEST PIZZA</h1>
                        <span className=" text-base text-font-gray">
                            The tastiest pizza in the universe
                        </span>
                    </div>
                </Link>
                <div className="flex items-center">
                    {location.pathname !== '/cart' && (
                        <Link to="/cart">
                            <CartButton totalPrice={totalPrice} totalCount={totalCount} />
                        </Link>
                    )}
                    {!isAuth ? (
                        <LoginBtn handleClick={() => dispatch(showModal())} className={'ml-5'} />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="rgba(0,0,0,0.4)"
                            className="w-8 h-8 ml-5 cursor-pointer hover:stroke-main-orange transition"
                            onClick={() => setIsOpened(!isOpened)}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        </svg>
                    )}
                </div>
                <AnimatePresence>
                    {isOpened && (
                        <motion.ul
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="flex flex-col absolute right-0 top-28 sm:top-12 rounded-lg shadow-md overflow-hidden z-10 bg-white">
                            {MenuArr.map((item, i) => (
                                <li
                                    className=" text-sm font-bold cursor-pointer py-3 pl-3 pr-6 hover:bg-[rgba(254,95,30,0.05)] hover:text-main-orange"
                                    key={i}
                                    onClick={() => handleMenuItem(item)}>
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className=" h-px md:w-[calc(100%+104px)] bg-[#F7F7F7] md:-ml-[52px] mt-10"></div>
        </>
    );
};
