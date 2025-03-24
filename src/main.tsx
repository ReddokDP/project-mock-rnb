import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { DropdownProvider } from '@admiral-ds/react-ui';
import { CUSTOM_THEME } from './theme/CUSTOM_THEME';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import { RouterProvider } from 'react-router-dom';
import { routesConfig } from './routes/routesConfig';
import { GlobalFont } from './assets/fonts/GlobalFont';
import { store } from './redux/store';

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
