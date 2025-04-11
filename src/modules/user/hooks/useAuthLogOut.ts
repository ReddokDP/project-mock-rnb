import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../services/apiService';
import { RoutesEnum } from '../../../app/routes/RoutesEnum';
import { logOut as logoutAction } from '../slice/authSlice';
import { setShowLogout, selectLogOut } from '../slice/authSlice';
import { selectUser } from '../slice/authSlice';

export const useAuthLogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(selectUser);
    const showLogout = useSelector(selectLogOut);

    const [logout, { isLoading }] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout({});
            localStorage.removeItem('user');
            dispatch(logoutAction());
            navigate(RoutesEnum.ROOT);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setShowLogout(false));
        }
    };

    return {
        handleLogout,
        isLoading,
        dispatch,
        user,
        showLogout,
    };
};
