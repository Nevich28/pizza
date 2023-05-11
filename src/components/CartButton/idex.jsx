import React from 'react';

export const CartButton = ({ totalPrice = 520, totalCount = 0 }) => {
    return (
        <div>
            <button className=" bg-main-orange text-base py-4 pl-6 pr-3 text-white font-bold rounded-tl-full rounded-bl-full">
                {totalPrice} $
            </button>
        </div>
    );
};
