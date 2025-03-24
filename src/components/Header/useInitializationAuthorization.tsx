import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from '../../redux/slice/authSlice';

export const useInitializationAuthorization = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (token && user) {
            dispatch(setCredentials({ user: { username: (JSON.parse(user)) } }));
        }

    }, [dispatch]);
}