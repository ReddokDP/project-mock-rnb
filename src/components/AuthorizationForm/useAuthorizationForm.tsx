import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { useForm } from 'react-hook-form';

interface FormValues {
    username: string;
    password: string;
}

export const useAuthorizationForm = () => {
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    const { handleSubmit, control } = useForm<FormValues>();

    const onSubmit = handleSubmit(async (data: FormValues) => {
        try {
            await login(data).unwrap();
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
