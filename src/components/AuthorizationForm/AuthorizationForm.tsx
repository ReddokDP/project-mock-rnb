import React from 'react';
import { InputField, Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../assets/fonts/GlobalStyle';
import { MainTitle } from '../TextS/MyText';
import { FormWrapper, CenterWrapper, InputsWrapper } from '../WrappersS/Wrappers';
import { useLoginMutation } from '../../../Query/LoginQuery';

const AuthorizationForm = () => {
    const navigate_register = useNavigate();
    const navigate_pass = useNavigate();
    const handleRegisterClick = () => {
        navigate_register('/register');
    };
    const [login] = useLoginMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        console.log('username', username, 'password', password);

        try {
            const response = await login({ username, password }).unwrap();
            if (response.status === 200 ) {
                navigate_pass('/passlogin');
            }
        } catch (error) {
            console.error('Ошибка авторизации:', error);
        }
    };

    return (
        <>
            <GlobalStyle />
            <form onSubmit={handleSubmit}>
                <CenterWrapper>
                    <FormWrapper>
                        <MainTitle>Добро пожаловать!</MainTitle>
                        <InputsWrapper>
                            <InputField
                                name="username"
                                label="Имя пользователя"
                                placeholder="Введите ваш логин"
                                dimension={'xl'}
                            />
                            <InputField
                                label="Пароль"
                                name="password"
                                placeholder="Введите ваш пароль"
                                type="password"
                                dimension={'xl'}
                            />
                        </InputsWrapper>
                        <p>
                            Еще нет аккаунта?{' '}
                            <a onClick={handleRegisterClick}>
                                <span>Зарегистрироваться</span>
                            </a>
                        </p>
                        <Button appearance="primary" type="submit">
                            Войти
                        </Button>
                    </FormWrapper>
                </CenterWrapper>
            </form>
        </>
    );
};

export default AuthorizationForm;
