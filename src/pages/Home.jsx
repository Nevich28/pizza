import { Categories } from '../components/Categories';
import { CartItem } from '../components/CatrItem';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort';
import { Wrapper } from '../components/Wrapper';
import pizzas from '../assets/pizzas.json';

// const pizzaArr = [
//     { name: 'Cheeseburger Pizza', price: '8,70' },
//     { name: 'Cheese', price: '4,65' },
//     { name: 'Asian style shrimp', price: '9,90' },
//     { name: 'Cheese chicken', price: '6,80' },
//     { name: 'Margarita', price: '4,10' },
// ];

export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <div className=" h-px md:w-[calc(100%+104px)] bg-[#F7F7F7] md:-ml-[52px] mt-10"></div>
            <div className="flex justify-between mt-10 flex-wrap">
                <Categories items={pizzas} />
                <Sort />
            </div>
            <h2 className="text-3xl font-bold mt-7 auto-rows-auto">All pizzas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
                {pizzas.map(({ id, ...item }) => (
                    <CartItem key={id} {...item} />
                ))}
            </div>
        </Wrapper>
    );
};
