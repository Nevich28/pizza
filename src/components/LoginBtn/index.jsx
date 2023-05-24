import React from 'react';

export const LoginBtn = ({ handleClick, className }) => {
    return (
        <button
            className={`${className} group/button flex h-12 px-5 items-center border border-main-orange rounded-full text-base font-bold text-main-orange hover:bg-main-orange hover:text-white transition`}
            onClick={handleClick}>
            Login
        </button>
    );
};
