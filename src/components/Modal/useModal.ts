import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { selectToOrder } from '../../redux/slices/modal/modal-selectors';
import { selectUser } from '../../redux/slices/user/user-selectors';
import { useAppDispatch } from '../../redux/store';

export const useModal = () => {
    const dispatch = useAppDispatch();
    const refScroll = useRef<HTMLDivElement>(null);
    console.log(refScroll);
    const menuArr = ['Login', 'Register'];
    const [isSelected, setIsSelected] = useState<string>(menuArr[0]);
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

    // type HandleClick = {
    //     e: React.FormEventHandler<HTMLFormElement>;
    // };

    const handleClick = (
        e: React.FormEvent<HTMLFormElement>,
        mod: string,
        email: string,
        password: string,
    ) => {
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
