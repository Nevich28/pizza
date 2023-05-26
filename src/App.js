import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { MainLayout } from './layouts/MainLayout';
import { FullPizza } from './pages/FullPizza';
import { Order } from './pages/Order';
import { CompletedOrders } from './pages/CompletedOrders';

function App() {
    return (
        // <Wrapper>
        //     <Header />
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                {/* <Route path="pizza/:id" element={<FullPizza />} /> */}
                <Route path="order" element={<Order />} />
                <Route path="completed-orders" element={<CompletedOrders />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
        // </Wrapper>
    );
}

export default App;
