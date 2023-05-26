import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import pizza from './pizza.png';

export const DoneOrder = ({ date, address, totalCount, totalPrice, items }) => {
    const [onenMore, setOpenMore] = useState(false);
    return (
        <div className="flex mb-6 shadow-lg border border-[rgba(0,0,0,0.1)] rounded-[10px] p-3">
            <img className="w-24 h-24 hidden sm:block" src={pizza} alt="pizza" />
            <div>
                <p>Order was placed on {date}</p>
                <p>We took the order to the address: {address}</p>
                <p>
                    There were <b>{totalCount}</b> pizzas in the order
                </p>
                <p>
                    The amount of the order was: <b>{totalPrice}$</b>{' '}
                </p>
                <div className="flex">
                    Want to know more?
                    <div
                        onClick={() => setOpenMore(!onenMore)}
                        className="flex ml-3 items-center cursor-pointer text-main-orange underline">
                        Click here
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#00000"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-4 h-4 scale-x-75 transition-all duration-200 ${
                                onenMore ? '-rotate-90' : 'rotate-90'
                            }`}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                        </svg>
                    </div>
                </div>
                <div>
                    <AnimatePresence>
                        {onenMore && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        // className=" my-4 flex flex-wrap items-center overflow-hidden">
                                        className=" grid grid-cols-[auto_1fr_auto_auto] my-4">
                                        <img
                                            className="hidden sm:block w-14 h-14"
                                            src={item.imageUrl}
                                            alt=""
                                        />
                                        <div className="ml-0 sm:ml-5">
                                            <p className=" font-semibold">{item.title}</p>
                                            <p>
                                                {item.type} {item.size} cm.
                                            </p>
                                        </div>
                                        <div className=" ml-5">
                                            <p className=" font-semibold">Count</p>
                                            <p> {item.count}</p>
                                        </div>
                                        <div className=" ml-5">
                                            <p className=" font-semibold">Price</p>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
