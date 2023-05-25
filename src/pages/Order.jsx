import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderItem } from '../components/Order';
import { SuccessOrder } from '../components/SuccessOrder';
import { selectCartItems } from '../redux/slices/cartSlice';
import { toOrderOff } from '../redux/slices/modalSlice';

export const Order = () => {
    const dispatch = useDispatch();
    const { placeOrderkey } = useSelector(selectCartItems);
    useEffect(() => {
        dispatch(toOrderOff());
    }, [dispatch]);
    return <>{placeOrderkey ? <SuccessOrder /> : <OrderItem />}</>;
};
