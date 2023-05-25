import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { selectToOrder } from '../../redux/slices/modalSlice';
import { selectUser } from '../../redux/slices/userSlice';

export const useModal = () => {
    const dispatch = useDispatch();
    const refScroll = useRef();
    const menuArr = ['Login', 'Register'];
    const [isSelected, setIsSelected] = useState(menuArr[0]);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { signInWithEmail, registerWithEmail, signInGoogle } = useAuth();
    const { isAuth, error } = useSelector(selectUser);
    const toOrder = useSelector(selectToOrder);
    const navigate = useNavigate();

    const resetInputs = () => {
        setLogin('');
        setPassword('');
    };

    const handleClick = (e, mod, email, password) => {
        e.preventDefault();
        switch (mod) {
            case 'Login':
                signInWithEmail(email, password);
                if (toOrder) {
                    navigate('/order');
                }
                break;
            case 'Register':
                registerWithEmail(email, password);
                if (toOrder) {
                    navigate('/order');
                }
                break;
            default:
                break;
        }
    };
    return {
        dispatch,
        refScroll,
        resetInputs,
        handleClick,
        isAuth,
        menuArr,
        setIsSelected,
        isSelected,
        signInGoogle,
        login,
        password,
        setLogin,
        showPassword,
        setPassword,
        error,
        setShowPassword,
    };
};
