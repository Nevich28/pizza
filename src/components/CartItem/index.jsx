import React from 'react';
import pizza from '../../assets/img/pizza/pizza.png';
export const CartItem = () => {
    return (
        <>
            <div className=" h-px w-full bg-[#F4F4F4] my-8"></div>
            <div className=" flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center md:w-1/2">
                    <img className=" w-20 h-20" src={pizza} alt="pizza" />
                    <div className=" ml-4">
                        <h3 className=" text-xl font-bold">Сырный цыпленок</h3>
                        <p className=" text-lg font-normal text-[#8D8D8D]">тонкое тесто, 26 см.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full md:w-1/2 mt-3 md:mt-0">
                    <div className="flex items-center">
                        <button className=" w-8 h-8 border-2 border-main-orange rounded-full text-xl text-main-orange font-extrabold hover:text-white hover:bg-main-orange transition">
                            -
                        </button>
                        <p className=" text-xl font-bold mx-3">5</p>
                        <button className=" w-8 h-8 border-2 border-main-orange rounded-full text-xl text-main-orange font-extrabold hover:text-white hover:bg-main-orange transition">
                            +
                        </button>
                    </div>
                    <span className=" text-xl font-bold">57.18 $</span>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#B6B6B6"
                            className="w-8 h-8 hover:fill-black hover:stroke-white transition">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};
