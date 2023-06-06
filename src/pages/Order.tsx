import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../components/Order';
import { SuccessOrder } from '../components/SuccessOrder';
import { selectCartItems } from '../redux/slices/cart/cart-selectors';
import { toOrderOff } from '../redux/slices/modal/modalSlice';
import { useAppDispatch } from '../redux/store';

export const Order = () => {
    const dispatch = useAppDispatch();
    const { placeOrderkey } = useSelector(selectCartItems);
    useEffect(() => {
        dispatch(toOrderOff());
    }, [dispatch]);
    return <>{placeOrderkey ? <SuccessOrder /> : <OrderItem />}</>;
};
