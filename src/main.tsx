import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME, FontsVTBGroup, DropdownProvider } from '@admiral-ds/react-ui';
import { App } from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={LIGHT_THEME}>
            <DropdownProvider>
                <FontsVTBGroup />
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </DropdownProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
