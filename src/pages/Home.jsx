import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort';
import { Wrapper } from '../components/Wrapper';

export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <div className="flex justify-between mt-24 flex-wrap">
                <Categories />
                <Sort />
            </div>
        </Wrapper>
    );
};
