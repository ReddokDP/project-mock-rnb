import { InputField, Button, T } from '@admiral-ds/react-ui';
import { InputsStyled } from '../../styles';
import { RoutesEnum } from '../../routes/RoutesEnum';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { FormStyled } from './AuthorizationForm.styled';
import { useAuthorizationForm } from './useAuthorizationForm';
export const AuthorizationForm = () => {
    const { control, onSubmit } = useAuthorizationForm();

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
