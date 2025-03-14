import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import routesConfig from '../routesConfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={LIGHT_THEME}>
            <DropdownProvider>
                <FontsVTBGroup />
                <ErrorBoundary>
                    <Provider store={store}>
                        <RouterProvider router={routesConfig} />
                    </Provider>
                </ErrorBoundary>
            </DropdownProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
