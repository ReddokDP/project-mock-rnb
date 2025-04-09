import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/apiService';
import { RoutesEnum } from '../../../app/routes/RoutesEnum';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../slice/authSlice';

interface FormValues {
    username: string;
    password: string;
}

export const useAuthorizationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
    const { handleSubmit, control } = useForm<FormValues>();

    const onSubmit = handleSubmit(async (data: FormValues) => {
        try {
            const response = await login(data).unwrap();
            localStorage.setItem('user', JSON.stringify(response.user.username))
            dispatch(setUser({user: response.user }));
            navigate(RoutesEnum.HOME_PAGE);
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    });

    return {
        control,
        onSubmit,
        isLoading,
    };
};
