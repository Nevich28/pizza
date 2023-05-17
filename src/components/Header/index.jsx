import React from 'react';
import { Link } from 'react-router-dom';
import { CartButton } from '../CartButton/idex';

import Logo from './logo.png';

export const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center sm:flex-row justify-between">
                <Link to="/" className=" flex items-center cursor-pointer mb-4 sm:mb-0">
                    <img className="w-11 h-11" src={Logo} alt="Logo" />
                    <div className=" flex flex-col ml-4">
                        <h1 className=" text-2xl font-extrabold">BEST PIZZA</h1>
                        <span className=" text-base text-font-gray">
                            The tastiest pizza in the universe
                        </span>
                    </div>
                </Link>
                <Link to="/cart">
                    <CartButton />
                </Link>
            </div>
            <div className=" h-px md:w-[calc(100%+104px)] bg-[#F7F7F7] md:-ml-[52px] mt-10"></div>
        </>
    );
};
