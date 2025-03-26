import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { useDispatch } from 'react-redux';
import { logOut as logoutAction } from '../../redux/slice/authSlice';
import { setShowLogout } from '../../redux/slice/uiSlice';

export const useLogOut = () => {
    const navigate = useNavigate();
    const [logout, { isLoading }] = useLogoutMutation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await logout({})
            localStorage.removeItem('user');
            dispatch(logoutAction());
            navigate(RoutesEnum.ROOT);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setShowLogout(false))
        }
    };

    return {
        handleLogout,
        isLoading
    };
};
