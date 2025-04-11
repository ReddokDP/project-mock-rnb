import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { DropdownProvider } from '@admiral-ds/react-ui';
import { CUSTOM_THEME } from './app/themes/CUSTOM_THEME';
import { Provider } from 'react-redux';
import ErrorBoundary from './app/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { routesConfig } from './app/routes/routesConfig';
import { GlobalFont } from './app/GlobalFont';
import { store } from './app/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalFont />
        <ThemeProvider theme={CUSTOM_THEME}>
            <DropdownProvider>
                <ErrorBoundary>
                    <Provider store={store}>
                        <RouterProvider router={routesConfig} />
                    </Provider>
                </ErrorBoundary>
            </DropdownProvider>
        </ThemeProvider>
    </StrictMode>,
);
