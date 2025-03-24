import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/slice/authSlice';
import { useState } from 'react';

interface FormValues {
    username: string;
    password: string;
}

export const useAuthorizationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    const { handleSubmit, control } = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = handleSubmit(async (data: FormValues) => {
        try {
            setIsLoading(true)
            const response = await login(data).unwrap();
            localStorage.setItem('token', response.token)
            localStorage.setItem('user', JSON.stringify(response.user.username))
            dispatch(setCredentials({user: response.user }));
            navigate(RoutesEnum.HOME_PAGE);
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        } finally {
            setIsLoading(false);
        }
    });

    return {
        control,
        onSubmit,
        isLoading,
    };
};
