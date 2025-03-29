import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useShowLogOutButton = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const showLogout = useSelector((state: RootState) => state.ui.showLogout);

    return {
        dispatch,
        user,
        showLogout,
    }
}