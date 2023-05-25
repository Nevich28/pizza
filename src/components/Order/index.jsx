import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder, selectCartItems } from '../../redux/slices/cartSlice';
import { BackButton } from '../BackButton';
import pizza from './pizza-png.png';
import { selectUser } from '../../redux/slices/userSlice';

export const OrderItem = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    const { id } = useSelector(selectUser);
    const { items, totalPrice, totalCount } = useSelector(selectCartItems);

    const enDate = new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
    }).format(new Date());
    const handleSendOrder = (e) => {
        const postData = {
            userId: id,
            address,
            items,
            totalPrice,
            totalCount,
            date: enDate,
        };
        e.preventDefault();
        dispatch(postOrder(postData));
    };
    return (
        <div className=" mt-4">
            <img className=" w-52 h-52 m-auto" src={pizza} alt="pizza" />
            <h1 className="mt-4 text-3xl font-bold text-center">You order is:</h1>
            <p className="mt-3 text-xl text-center">
                <b>{totalCount}</b> delicious {totalCount > 1 ? 'pizzas' : 'pizza'} for{' '}
                <b>{totalPrice}$</b>
            </p>
            <p className="mt-3 text-xl text-center">Where do you want us to bring it?</p>
            <form onSubmit={(e) => handleSendOrder(e)}>
                <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block mx-auto my-3 resize-none border border-[rgba(0,0,0,0.1)] rounded-[10px] w-72 h-20 p-3 focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                    type="textarea"
                    placeholder="Enter your shipping address..."
                />
                <div className="flex justify-center items-center flex-wrap mx-auto">
                    <BackButton link="/cart">Correct the order</BackButton>
                    <button
                        type="submit"
                        className="rounded-full py-3 px-9 bg-main-orange text-white hover:bg-orange-500 transition sm:ml-6">
                        Place an order
                    </button>
                </div>
            </form>
        </div>
    );
};
