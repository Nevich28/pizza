import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoneOrder } from '../components/DoneOrder';
import { fetchCompletedOrders, selectItems } from '../redux/slices/completedOrdersSlice';
import { selectUser } from '../redux/slices/userSlice';

export const CompletedOrders = () => {
    const dispatch = useDispatch();
    const { id } = useSelector(selectUser);
    const { items } = useSelector(selectItems);

    useEffect(() => {
        dispatch(fetchCompletedOrders(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    console.log(items);
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
