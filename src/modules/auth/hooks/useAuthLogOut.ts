import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../services/apiService';
import { RoutesEnum } from '../../../routes/RoutesEnum';
import { logOut as logoutAction } from '../slice/authSlice';
import { setShowLogout } from '../../shared/slice/uiSlice';

export const useAuthLogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.auth.user);
    const showLogout = useSelector((state: RootState) => state.ui.showLogout);

    const [logout, { isLoading }] = useLogoutMutation();

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
        isLoading,
        dispatch,
        user,
        showLogout,
    }
}

