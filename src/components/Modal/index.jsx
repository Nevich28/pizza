import { useEffect } from 'react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { motion } from 'framer-motion';
import { hideModal } from '../../redux/slices/modalSlice';
import { errorConvert } from '../../helpers/helpers';
import { useModal } from './useModal';

export const Modal = ({ ...props }) => {
    const {
        dispatch,
        refScroll,
        resetInputs,
        handleClick,
        isAuth,
        menuArr,
        setIsSelected,
        isSelected,
        signInGoogle,
        login,
        password,
        setLogin,
        showPassword,
        setPassword,
        error,
        setShowPassword,
    } = useModal();

    const ActiveLine = () => {
        return (
            <motion.div
                layoutId="activeItem"
                className="w-full h-0.5 absolute -bottom-2 bg-main-orange"></motion.div>
        );
    };

    useEffect(() => {
        disableBodyScroll(refScroll, { reserveScrollBarGap: true });
        return () => {
            clearAllBodyScrollLocks(refScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isAuth) {
            resetInputs();
            dispatch(hideModal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth, dispatch]);

    return (
        <div
            {...props}
            className="top-0 w-screen h-screen fixed bg-[rgba(0,0,0,0.3)] z-40 overflow-hidden flex justify-center items-center">
            <div ref={refScroll} className="relative w-72 min-h-72 rounded-md bg-white p-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffff"
                    className="w-6 h-6 absolute -top-6 -right-6 cursor-pointer hover:scale-105"
                    onClick={() => dispatch(hideModal())}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <ul className="flex justify-between px-8 text-font-gray ">
                    {menuArr.map((item) => (
                        <motion.li
                            key={item}
                            onClick={() => setIsSelected(item)}
                            initial={{ color: '#2C2C2C' }}
                            animate={{
                                color: item === isSelected ? '#FE5F1E' : '#2C2C2C',
                            }}
                            className="cursor-pointer relative transition-all duration-300">
                            {item === isSelected && <ActiveLine />}
                            {item}
                        </motion.li>
                    ))}
                </ul>
                <h1 className=" mt-6 font-bold ">
                    {isSelected === 'Login'
                        ? 'Sign in with your email or'
                        : 'Register with your email or'}
                </h1>
                <button
                    onClick={signInGoogle}
                    className=" mt-3 w-full py-2 px-4 flex border border-[rgba(0,0,0,0.1)] rounded-[10px] hover:shadow-lg transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="705.6"
                        height="720"
                        viewBox="0 0 186.69 190.5"
                        className="w-6 h-6">
                        <g transform="translate(1184.583 765.171)">
                            <path
                                clipPath="none"
                                mask="none"
                                d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                                fill="#4285f4"
                            />
                            <path
                                clipPath="none"
                                mask="none"
                                d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                                fill="#34a853"
                            />
                            <path
                                clipPath="none"
                                mask="none"
                                d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                                fill="#fbbc05"
                            />
                            <path
                                d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                                fill="#ea4335"
                                clipPath="none"
                                mask="none"
                            />
                        </g>
                    </svg>
                    <p className="ml-3">Sign in with Google</p>
                </button>
                <form onSubmit={(e) => handleClick(e, isSelected, login, password)}>
                    <input
                        className=" mt-5 border border-[rgba(0,0,0,0.1)] py-2 pr-[10px] pl-[10px] w-full rounded-[10px] text-base focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                        placeholder="Login"
                        type="email"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <div className="mt-5 relative">
                        {password !== '' &&
                            (!showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="rgba(0,0,0,0.2)"
                                    className="w-6 h-6 absolute right-1 top-2 cursor-pointer hover:stroke-[rgba(0,0,0,0.4)] transition"
                                    onClick={() => setShowPassword(true)}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="rgba(0,0,0,0.2)"
                                    className="w-6 h-6 absolute right-1 top-2 cursor-pointer hover:stroke-[rgba(0,0,0,0.4)] transition"
                                    onClick={() => setShowPassword(false)}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            ))}

                        <input
                            className="border border-[rgba(0,0,0,0.1)] py-2 pr-[35px] pl-[10px] w-full rounded-[10px] text-base focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <p className=" mt-2 text-red-600 text-center">{errorConvert(error)}</p>
                    )}
                    <button
                        className="mt-5 bg-main-orange rounded-md w-full py-2 text-white disabled:bg-font-gray hover:bg-orange-500 transition"
                        disabled={login === '' || password === ''}
                        // onClick={() => handleClick(isSelected, login, password)}
                        type="submit">
                        {isSelected === 'Login' ? 'Sign in' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};
