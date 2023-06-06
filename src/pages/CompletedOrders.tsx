import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DoneOrder } from '../components/DoneOrder';
import { selectItems } from '../redux/slices/completedOrders/completedOrders-selectors';
import { fetchCompletedOrders } from '../redux/slices/completedOrders/completedOrdersSlice';
import { selectUser } from '../redux/slices/user/user-selectors';
import { useAppDispatch } from '../redux/store';

export const CompletedOrders = () => {
    const dispatch = useAppDispatch();
    const { id } = useSelector(selectUser);
    const { items } = useSelector(selectItems);

    useEffect(() => {
        dispatch(fetchCompletedOrders(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <div className=" mt-6">
            <h1 className="my-5 text-3xl font-bold text-center">
                All your orders of delicious pizza with us:
            </h1>
            {items.map((item, i) => (
                <DoneOrder key={i} {...item} />
            ))}
        </div>
    );
};
