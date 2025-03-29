import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../modules/shared/components/Layout';
import { AuthorizationForm } from '../modules/auth/components/AuthorizationForm';
import { HomePage } from '../modules/home/components/HomePage';
import { RegistrationForm } from '../modules/auth/components/RegistrationForm';
import { RoutesEnum } from './RoutesEnum';
import { Expenses } from '../modules/expenses/components/Expenses';

export const routesConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AuthorizationForm />,
            },
            {
                path: RoutesEnum.REGISTER,
                element: <RegistrationForm />,
            },
            {
                path: RoutesEnum.HOME_PAGE,
                element: <HomePage />,
            },
            {
                path: RoutesEnum.EXPENSES,
                element: <Expenses />,
            },
        ],
    },
]);
