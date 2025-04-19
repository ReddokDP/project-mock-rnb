import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../../app/services/apiService';
import { RoutesEnum } from '../../../app/routes/RoutesEnum';
import { useDispatch } from 'react-redux';
import { logOut as logoutAction } from '../slice/authSlice';
import { setShowLogout } from '../slice/authSlice';

export const useLogOut = () => {
    const navigate = useNavigate();
    const [logout, { isLoading }] = useLogoutMutation();
    const dispatch = useDispatch();

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
    };
};
