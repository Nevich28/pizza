import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetOrderkey, selectCartItems } from '../../redux/slices/cartSlice';
import { BackButton } from '../BackButton';
import success from './success.png';

export const SuccessOrder = () => {
    const dispatch = useDispatch();
    const { placeOrderid } = useSelector(selectCartItems);
    useEffect(() => {
        return () => {
            dispatch(resetOrderkey());
        };
    }, [dispatch]);
    return (
        <div className=" mt-4">
            <img className=" w-52 h-52 m-auto" src={success} alt="success" />
            <h1 className="mt-4 text-3xl font-bold text-center">
                Your order number <b>{placeOrderid}</b> is accepted! Wait for delivery.
            </h1>
            <div className=" mt-4 w-48 mx-auto">
                <BackButton />
            </div>
        </div>
    );
};
