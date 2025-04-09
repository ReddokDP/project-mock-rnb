import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../auth/slice/authSlice';
import {selectLogOut} from '../slice/uiSlice'

export const useShowLogOutButton = () => {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    const showLogout = useSelector(selectLogOut)

    return {
        dispatch,
        user,
        showLogout,
    }
}