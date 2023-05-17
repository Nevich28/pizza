import { Categories } from '../components/Categories';
import { CardItem } from '../components/CardItem';
import { Sort } from '../components/Sort';
import { useEffect, useState } from 'react';
import { Skeleton } from '../components/CardItem/Skeleton';
import { sortStateItems } from '../helpers/helpers';
import { Search } from '../components/Search';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [catNameCurrent, setCatName] = useState('All');
    const [searchPizzaCurrent, setSearchPizzaCurrent] = useState('');

    const filterCategory = (catName = 'All') => {
        setCatName(catName);
    };
    useEffect(() => {
        if (catNameCurrent === 'All') {
            const filteredAll = items.filter((item) => item.title.indexOf(searchPizzaCurrent) > -1);
            setFilteredItems(filteredAll);
        } else {
            const filtered = items.filter(
                (item) =>
                    item.category === catNameCurrent && item.title.indexOf(searchPizzaCurrent) > -1,
            );
            setFilteredItems(filtered);
        }
    }, [catNameCurrent, searchPizzaCurrent]);

    const sortValue = (value = 'alphabetically', sortDirection = true) => {
        const tempFilteredItems = JSON.parse(JSON.stringify(filteredItems));
        setFilteredItems(sortStateItems(tempFilteredItems, value, sortDirection));
    };

    const searchPizza = (value) => {
        setSearchPizzaCurrent(value);
    };

    useEffect(() => {
        // fetch('https://run.mocky.io/v3/47b5ec01-4ca7-4919-88bb-f6a3be5845bd')
        fetch('https://alfastroy.kharkov.ua/feedback/default')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setFilteredItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="flex items-center justify-between mt-10 flex-wrap">
                <Categories filterCategory={filterCategory} items={items} />
                <Search searchPizza={searchPizza} />
                <Sort sortValue={sortValue} />
            </div>
            <h2 className="text-3xl font-bold mt-7 auto-rows-auto">All pizzas</h2>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
                {isLoading
                    ? [...new Array(8)].map((_, i) => <Skeleton key={i} className=" mx-auto" />)
                    : filteredItems.map(({ id, ...item }) => <CardItem key={id} {...item} />)}
            </div>
        </>
    );
};
