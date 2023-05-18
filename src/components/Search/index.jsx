import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

export const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 500),
        [],
    );
    const onChangeInput = (event) => {
        setValue(event);
        updateSearchValue(event);
    };
    const handleClear = () => {
        setValue('');
        dispatch(setSearchValue(''));
        inputRef.current.focus();
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
                ref={inputRef}
                onChange={(e) => onChangeInput(e.target.value)}
                value={value}
                className="border border-[rgba(0,0,0,0.1)] py-2 pr-[20px] pl-[42px] w-68 rounded-[10px] text-base focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                placeholder="Pizza search..."
            />
            {value && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 opacity-30 absolute right-[14px] top-[9px] cursor-pointer hover:stroke-gray-600 transition"
                    onClick={() => handleClear()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
        </div>
    );
};
