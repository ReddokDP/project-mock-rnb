import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode; // Callback UI, который будет отображаться при ошибке
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    // Метод для обновления состояния при возникновении ошибки
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    // Метод для логирования ошибки (например, отправка данных в сервис мониторинга)
    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error:', error, errorInfo);
    }

    // Рендеринг компонента
    public render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback || <h1>Что-то пошло не так.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
