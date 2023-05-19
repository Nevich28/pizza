import { BackButton } from '../BackButton';
import EmtyCart from './emptycart.png';

export const EmptyCart = () => {
    return (
        <div className=" pt-8">
            <h1 className=" text-3xl font-bold text-center">Cart is empty 😕</h1>
            <p className=" text-lg text-center mt-2">
                Chances are you haven't ordered a pizza yet. To order a pizza, go to the home page.
            </p>
            <img className=" mx-auto mt-10 w-[300px]" src={EmtyCart} alt="EmptyCart" />
            <div className="w-[210px] mx-auto mt-16">
                <BackButton />
            </div>
        </div>
    );
};
