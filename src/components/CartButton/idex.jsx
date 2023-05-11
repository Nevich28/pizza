import React from 'react';

export const CartButton = ({ totalPrice = 520, totalCount = 3 }) => {
    return (
        <div className="flex bg-main-orange text-base text-white font-bold rounded-full items-center overflow-hidden">
            <div className="flex items-center text-inherit h-full py-3 pl-6 pr-3 cursor-pointer hover:bg-orange-500 transition-all delay-100">
                {totalPrice} $
            </div>
            <div className=" w-px h-6 bg-white opacity-25"></div>
            <div className="flex items-center text-inherit h-full py-3 pr-6 pl-3 cursor-pointer hover:bg-orange-500 transition-all delay-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className=" w-5 h-5 mr-2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>

                {totalCount === 0 ? '' : totalCount}
            </div>
            {/* <button className=" bg-main-orange text-base py-4 pl-6 pr-3 text-white font-bold rounded-tl-full rounded-bl-full border-r">
                {totalPrice} $
            </button>
            <button className=" bg-main-orange text-base py-4 pl-3 pr-6 text-white font-bold rounded-tr-full rounded-br-full">
                {totalPrice} $
            </button> */}
        </div>
    );
};
