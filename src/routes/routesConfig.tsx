import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/LayoutContainer/LayoutContainer';
import { AuthorizationForm } from '../components/AuthorizationForm/AuthorizationForm';
import { HomePage } from '../components/HomePage';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
import { routesEnum } from './routesEnum';

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
                path: routesEnum.REGISTER,
                element: <RegistrationForm />,
            },
            {
                path: routesEnum.HOME_PAGE,
                element: <HomePage />,
            },
        ],
    },
]);
