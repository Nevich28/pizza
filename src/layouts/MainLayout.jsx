import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { Wrapper } from '../components/Wrapper';
import { selectModal } from '../redux/slices/modalSlice';

export const MainLayout = () => {
    const showModal = useSelector(selectModal);
    return (
        <>
            {showModal && <Modal />}
            <Wrapper>
                <Header />
                <Outlet />
            </Wrapper>
        </>
    );
};
