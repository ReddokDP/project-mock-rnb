import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRegistrationMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';

interface RegistrationFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

export const useRegistrationForm = () => {
    const { handleSubmit, control, watch } = useForm<RegistrationFormData>();
    const navigate = useNavigate();
    const [registerUser] = useRegistrationMutation();

    const onSubmit = handleSubmit(async ({ username, password, email, role }: RegistrationFormData) => {
        try {
            await registerUser({
                username,
                password,
                email,
                role,
            });
            navigate(RoutesEnum.ROOT);
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
    });

    const passwordValue = watch('password');

    return {
        passwordValue,
        onSubmit,
        control,
    };
};
