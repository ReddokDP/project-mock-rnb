import React from 'react';
import { InputField, Button, SelectField, Option } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../assets/fonts/GlobalStyle';
import { MainTitle } from '../TextS/MyText';
import {FormWrapper, CenterWrapper, InputsWrapper} from '../WrappersS/Wrappers';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const handleAuthorizationClick = () => {
        navigate('/');
    };
    return (
        <>
            <GlobalStyle />
            <form>
                <FormWrapper>
                    <CenterWrapper>
                        <MainTitle>Зарегистрироваться</MainTitle>
                        <h2 style={{ textAlign: 'center' }}></h2>
                        <InputsWrapper>
                            <InputField
                                label="Имя пользователя"
                                placeholder="Введите имя пользователя"
                                required
                                style={{ marginBottom: '16px' }}
                            />
                            <InputField
                                label="Email"
                                placeholder="Введите email"
                                type="email"
                                style={{ marginBottom: '16px' }}
                            />
                            <InputField
                                label="Пароль"
                                placeholder="Введите пароль"
                                type="password"
                                required
                                style={{ marginBottom: '16px' }}
                            />
                            <InputField
                                label="Пароль ещё раз"
                                placeholder="Повторите пароль"
                                type="password"
                                required
                                style={{ marginBottom: '16px' }}
                            />
                            <SelectField
                                label="Администратор?"
                                placeholder="Выберите опцию"
                                style={{ marginBottom: '24px' }}>
                                <Option value="admin">Да</Option>
                                <Option value="user">Нет</Option>
                            </SelectField>
                        </InputsWrapper>
                        <p style={{ textAlign: 'right' }}>
                            Уже есть аккаунт?{' '}
                            <a onClick={handleAuthorizationClick}>
                                <span onClick={handleAuthorizationClick}>Войти</span>
                            </a>
                        </p>
                        <Button
                            dimension="l"
                            appearance="primary"
                            type="submit"
                            style={{ width: '250px', margin: '0 auto' }}>
                            Зарегистрироваться
                        </Button>
                    </CenterWrapper>
                </FormWrapper>
            </form>
        </>
    );
};

export default RegistrationForm;
