import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/LayoutContainer/Layout';
import { AuthorizationForm } from '../components/AuthorizationForm/AuthorizationForm';
import { HomePage } from '../components/HomePage/HomePage';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { RoutesEnum } from './RoutesEnum';

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
        ],
    },
]);
