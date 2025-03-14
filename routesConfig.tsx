import { createBrowserRouter } from 'react-router-dom';
import { App } from './src/App';
import { MyForm } from './src/components/Myform';
import { Counter } from './src/components/Counter';
import { Home } from './src/components/Home';

const routesConfig = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'myform',
                element: <MyForm />,
            },
            {
                path: 'counter',
                element: <Counter />,
            },
        ],
    },
]);
export default routesConfig;
