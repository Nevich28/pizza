import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <Wrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Wrapper>
    );
}

export default App;
