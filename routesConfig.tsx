import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './src/components/LayoutContainer';
import AuthorizationForm from './src/components/AuthorizationForm/AuthorizationForm';
import RegistrationForm from './src/components/RegistrationForm/RegistrationForm';
import HelloPage from './src/components/HelloPage';

const routesConfig = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AuthorizationForm />,
            },
            {
                path: '/register',
                // index: true,
                element: <RegistrationForm />,
            },
            {
                path: '/passlogin',
                // index: true,
                element: <HelloPage />,
            },
        ],
    },
]);
export default routesConfig;
