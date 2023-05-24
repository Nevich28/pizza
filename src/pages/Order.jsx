import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OrderItem } from '../components/Order';
import { toOrderOff } from '../redux/slices/modalSlice';

export const Order = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toOrderOff());
    }, [dispatch]);
    return (
        <>
            <OrderItem />
        </>
    );
};
