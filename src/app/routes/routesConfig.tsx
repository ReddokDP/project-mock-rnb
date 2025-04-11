import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../layouts/Layout';
import { AuthorizationForm } from '../../modules/user/components/AuthorizationForm/AuthorizationForm';
import { HomePage } from '../../modules/home/components/HomePage/HomePage';
import { RegistrationForm } from '../../modules/user/components/RegistrationForm/RegistrationForm';
import { ExpensesPage } from '../../modules/expenses/components/ExpensesPage/ExpensesPage';
import { ProtectedRoute } from './component/ProtectedRoute';
import { RoutesEnum } from './RoutesEnum';

export const routesConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/login',
                element: <AuthorizationForm />,
            },
            {
                path: RoutesEnum.REGISTER,
                element: <RegistrationForm />,
            },
            {
                path: '/',
                element: <ProtectedRoute />,
                children: [
                    {
                        path: RoutesEnum.HOME_PAGE,
                        element: <HomePage />,
                    },
                    {
                        path: RoutesEnum.EXPENSES,
                        element: <ExpensesPage />,
                    },
                ],
            },
        ],
    },
]);
