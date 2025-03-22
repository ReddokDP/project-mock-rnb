import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slice/authSlice';

interface FormValues {
    username: string;
    password: string;
}

export const useAuthorizationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    const { handleSubmit, control } = useForm<FormValues>();

    const onSubmit = handleSubmit(async (data: FormValues) => {
        try {
            const response = await login(data).unwrap();
            dispatch(setCredentials({ token: response.token, user: response.user }));
            navigate(RoutesEnum.HOME_PAGE);
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    });

    return {
        control,
        onSubmit,
    };
};
