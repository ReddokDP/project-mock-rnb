import { InputField, Button, T } from '@admiral-ds/react-ui';
import { InputsStyled } from '../../../../shared';
import { RoutesEnum } from '../../../../app/routes/RoutesEnum';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { FormStyled, SpinnerLoader } from './AuthorizationForm.styled';
import { useAuthorizationForm } from '../../hooks/useAuthorizationForm';
import { AuthorizationFormFieldsEnum } from '../';

export const AuthorizationForm = () => {
    const { control, onSubmit, isLoading } = useAuthorizationForm();

    return (
        <FormStyled onSubmit={onSubmit}>
            <T font="Header/H2" as="h1">
                Добро пожаловать!
            </T>
            <InputsStyled>
                <Controller
                    name={AuthorizationFormFieldsEnum.USERNAME}
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
                    name={AuthorizationFormFieldsEnum.PASSWORD}
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
            {isLoading && <SpinnerLoader />}
        </FormStyled>
    );
};
