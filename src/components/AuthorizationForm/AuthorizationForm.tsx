import { InputField, Button, T } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { InputsStyled } from '../../styles';
import { useLoginMutation } from '../../services/apiService';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

interface FormValues {
    username: string;
    password: string;
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
`;

export const AuthorizationForm = () => {
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = handleSubmit(async (data: FormValues) => {
        try {
            await login(data).unwrap();
            navigate(RoutesEnum.HOME_PAGE);
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    });

    return (
        <FormStyled onSubmit={onSubmit}>
            <T font="Header/H2" as="h1">
                Добро пожаловать!
            </T>
            <InputsStyled>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: 'Введите имя пользователя' }}
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            label="Имя пользователя"
                            placeholder="Введите ваш логин"
                            dimension="xl"
                            status={fieldState.error ? 'error' : undefined}
                            extraText={fieldState.error?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Введите пароль' }}
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            label="Пароль"
                            placeholder="Введите ваш пароль"
                            type="password"
                            dimension="xl"
                            status={fieldState.error ? 'error' : undefined}
                            extraText={fieldState.error?.message}
                        />
                    )}
                />
            </InputsStyled>
            <T font="Main/XS" as="p">
                Еще нет аккаунта? <Link to={RoutesEnum.REGISTER}>Зарегистрироваться</Link>
            </T>
            <Button appearance="primary" type="submit">
                Войти
            </Button>
        </FormStyled>
    );
};
