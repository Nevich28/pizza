import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setError, setUser } from '../redux/slices/user/userSlice';

export const useAuth = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const signInWithEmail = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            dispatch(
                setUser({
                    email: res.user.email,
                    id: res.user.uid,
                    token: res.user.accessToken,
                }),
            );
        } catch (e) {
            dispatch(setError(e.code));
        }
    };
    const registerWithEmail = async (email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(
                setUser({
                    email: res.user.email,
                    id: res.user.uid,
                    token: res.user.accessToken,
                }),
            );
        } catch (e) {
            dispatch(setError(e.code));
        }
    };
    const signInGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            // console.log(res);

            dispatch(
                setUser({
                    email: res.user.email,
                    id: res.user.uid,
                    token: res.user.accessToken,
                }),
            );
        } catch (e) {
            console.log(e);
            dispatch(setError(e.code));
        }
    };

    return { signInWithEmail, registerWithEmail, signInGoogle };
};
