import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../../auth/slice/authSlice';

export const useInitializationAuthorization = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if (user) {
            dispatch(setUser({ user: { username: (JSON.parse(user)) } }));
        }

    }, [dispatch]);
}