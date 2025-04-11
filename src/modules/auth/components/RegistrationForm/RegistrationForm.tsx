import { InputField, Button, SelectField, Option, T } from '@admiral-ds/react-ui';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { InputsStyled } from '../../../shared/styled';
import { RoutesEnum } from '../../../../app/routes/RoutesEnum';
import { FormStyled } from './RegistrationForm.styled';
import { useRegistrationForm } from '../../hooks/useRegistrationForm';

const selectOptions = [
    { value: 'admin', label: 'Да' },
    { value: 'user', label: 'Нет' },
];

export const RegistrationForm = () => {
    const { passwordValue, onSubmit, control } = useRegistrationForm();

    return (
        <FormStyled onSubmit={onSubmit}>
            <T font="Header/H3" as="h1">
                Зарегистрироваться
            </T>
            <InputsStyled>
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
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                    rules={{
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен быть не менее 6 символов',
                        },
                    }}
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
                            {...field}
                        >
                            {selectOptions.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </SelectField>
                    )}
                />
            </InputsStyled>
            <T font="Main/XS" as="p">
                Уже есть аккаунт? <Link to={RoutesEnum.ROOT}>Войти</Link>
            </T>
            <Button dimension="l" appearance="primary" type="submit">
                Зарегистрироваться
            </Button>
        </FormStyled>
    );
};
