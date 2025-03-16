import { InputField, Button, SelectField, Option, T } from '@admiral-ds/react-ui';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import GlobalStyle from '../../assets/fonts/GlobalStyle';
import { FormWrapper, CenterWrapper, InputsWrapper } from '../WrappersS/Wrappers';
import { routesEnum } from '../../routes/routesEnum';

interface RegistrationFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

const selectOptions = [
    { value: 'admin', label: 'Да' },
    { value: 'user', label: 'Нет' },
];

export const RegistrationForm = () => {
    const { handleSubmit, control, watch } = useForm<RegistrationFormData>();

    const onSubmit = (data: RegistrationFormData) => {
        console.log(data);
    };

    const passwordValue = watch('password');

    return (
        <>
            <GlobalStyle />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormWrapper>
                    <CenterWrapper>
                        <T font={'Header/H3'} as="h1">
                            Зарегистрироваться
                        </T>
                        <InputsWrapper>
                            <Controller
                                name="username"
                                control={control}
                                rules={{ required: 'Имя пользователя обязательно' }}
                                render={({ field, fieldState }) => (
                                    <InputField
                                        label="Имя пользователя"
                                        placeholder="Введите имя пользователя"
                                        required
                                        status={fieldState.error ? 'error' : undefined}
                                        extraText={fieldState.error?.message}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Неверный формат email',
                                    },
                                }}
                                render={({ field, fieldState }) => (
                                    <InputField
                                        label="Email"
                                        placeholder="Введите email"
                                        type="email"
                                        status={fieldState.error ? 'error' : undefined}
                                        extraText={fieldState.error?.message}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: 'Пароль обязателен' }}
                                render={({ field, fieldState }) => (
                                    <InputField
                                        label="Пароль"
                                        placeholder="Введите пароль"
                                        type="password"
                                        status={fieldState.error ? 'error' : undefined}
                                        extraText={fieldState.error?.message}
                                        required
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{
                                    required: 'Подтверждение пароля обязательно',
                                    validate: (value) => value === passwordValue || 'Пароли не совпадают',
                                }}
                                render={({ field, fieldState }) => (
                                    <InputField
                                        label="Пароль ещё раз"
                                        placeholder="Повторите пароль"
                                        type="password"
                                        status={fieldState.error ? 'error' : undefined}
                                        extraText={fieldState.error?.message}
                                        {...field}
                                        required
                                    />
                                )}
                            />

                            <Controller
                                name="role"
                                control={control}
                                rules={{ required: 'Выбор обязателен' }}
                                render={({ field, fieldState }) => (
                                    <SelectField
                                        label="Администратор?"
                                        placeholder="Выберите опцию"
                                        status={fieldState.error ? 'error' : undefined}
                                        extraText={fieldState.error?.message}
                                        required
                                        {...field}>
                                        {selectOptions.map((option) => (
                                            <Option key={option.value} value={option.value}>
                                                {option.label}
                                            </Option>
                                        ))}
                                    </SelectField>
                                )}
                            />
                        </InputsWrapper>
                        <T font={'Main/XS'} as="p">
                            Уже есть аккаунт? <Link to={routesEnum.ROOT}>Войти</Link>
                        </T>
                        <Button
                            dimension="l"
                            appearance="primary"
                            type="submit">
                            Зарегистрироваться
                        </Button>
                    </CenterWrapper>
                </FormWrapper>
            </form>
        </>
    );
};
