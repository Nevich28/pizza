import React from 'react';
import { Link } from 'react-router-dom';

type BackButtonProps = { children?: string; link?: string };

export const BackButton = ({ children = 'Go back', link = '/' }: BackButtonProps) => {
    return (
        <Link
            to={link}
            className="flex items-center justify-center border rounded-full py-3 px-9 border-[#D3D3D3] text-[#D3D3D3] group/goback mb-3 sm:mb-0 hover:bg-black hover:text-white transition">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D3D3D3"
                className="w-6 h-6 group-hover/goback:-translate-x-4 group-hover/goback:stroke-[#FFFFFF] transition">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
            {children}
        </Link>
    );
};
