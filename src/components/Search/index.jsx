import React, { useState } from 'react';

export const Search = ({ searchPizza }) => {
    const [inputSearch, setInputSearch] = useState('');
    const handleChange = (value) => {
        setInputSearch(value);
        searchPizza(value);
    };
    return (
        <div className=" relative mb-3 md:mb-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 opacity-30 absolute left-[14px] top-[12px]">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <input
                onChange={(e) => handleChange(e.target.value)}
                value={inputSearch}
                className="border border-[rgba(0,0,0,0.1)] py-2 pr-[20px] pl-[42px] w-68 rounded-[10px] text-base focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                placeholder="Pizza search..."
            />
        </div>
    );
};
