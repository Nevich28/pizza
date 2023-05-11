import React from 'react';
import { CartButton } from '../CartButton/idex';

import Logo from './logo.png';

export const Header = () => {
    return (
        <div className=" flex">
            <div className=" flex items-center cursor-pointer">
                <img className="w-11 h-11" src={Logo} alt="Logo" />
                <div className=" flex flex-col ml-4">
                    <h1 className=" text-2xl font-extrabold">BEST PIZZA</h1>
                    <span className=" text-base text-font-gray">
                        The tastiest pizza in the universe
                    </span>
                </div>
            </div>
            <CartButton />
        </div>
    );
};
