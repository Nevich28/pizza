import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setSortProperty, setSortDirection } from '../../redux/slices/filter/filterSlice';
import { selectFilters } from '../../redux/slices/filter/filter-selectors';

const sortArr = ['popularity', 'by price', 'alphabetically'];

export const Sort = () => {
    const dispatch = useDispatch();
    const { sortProperty, sortDirection } = useSelector(selectFilters);
    const [isOpened, setIsOpened] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const handleMenuItem = (item: string) => {
        dispatch(setSortProperty(item));
        setIsOpened(!isOpened);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current) {
                if (!event.composedPath().includes(sortRef.current)) {
                    setIsOpened(false);
                }
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className=" relative">
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00000"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    onClick={() => dispatch(setSortDirection(!sortDirection))}
                    className={`w-4 h-4 scale-x-75 cursor-pointer transition-all duration-200 ${
                        sortDirection ? '-rotate-90' : 'rotate-90'
                    }`}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                </svg>
                <span className=" ml-2 text-sm font-bold">Sorted by:</span>
                <span
                    className=" ml-2 text-main-orange border-b border-dashed border-main-orange cursor-pointer"
                    onClick={() => setIsOpened(!isOpened)}>
                    {sortProperty}
                </span>
            </div>
            <AnimatePresence>
                {isOpened && (
                    <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="flex flex-col absolute right-0 top-9 rounded-lg shadow-md overflow-hidden z-10 bg-white">
                        {sortArr.map((item, i) => (
                            <li
                                className=" text-sm font-bold cursor-pointer py-3 pl-3 pr-6 hover:bg-[rgba(254,95,30,0.05)] hover:text-main-orange"
                                key={i}
                                onClick={() => handleMenuItem(item)}>
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};
