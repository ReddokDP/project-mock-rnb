import { InputField, Button, T } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../assets/fonts/GlobalStyle';
import { FormWrapper, CenterWrapper, InputsWrapper } from '../WrappersS/Wrappers';
import { useLoginMutation } from '../Query/LoginQuery';
import { routesEnum } from '../../routes/routesEnum';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

interface FormValues {
    username: string;
    password: string;
}

export const AuthorizationForm = () => {
    const navigateHome = useNavigate();

    const [login] = useLoginMutation();

    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await login(data).unwrap();
            if (response.status === 200) {
                navigateHome(routesEnum.HOME_PAGE);
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    };

    return (
        <>
            <GlobalStyle />
            <form onSubmit={handleSubmit(onSubmit)}>
                <CenterWrapper>
                    <FormWrapper>
                        <T font={'Header/H2'} as="h1">
                            Добро пожаловать!
                        </T>
                        <InputsWrapper>
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
                        </InputsWrapper>
                        <T font={'Main/XS'} as="p">
                            Еще нет аккаунта? <Link to={routesEnum.REGISTER}>Зарегистрироваться</Link>
                        </T>
                        <Button appearance="primary" type="submit">
                            Войти
                        </Button>
                    </FormWrapper>
                </CenterWrapper>
            </form>
        </>
    );
};
