import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../modules/user/slice/authSlice';
import { RoutesEnum } from '../RoutesEnum';

interface ProtectedRouteProps {
    redirectPath?: string;
    redirectPathAuth?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = RoutesEnum.AUTHORIZATION, redirectPathAuth = RoutesEnum.HOME_PAGE }) => {
    const user = useSelector(selectUser);

    const currentLocation = useLocation();

    if (!user) {
        return <Navigate to={redirectPath} state={{ from: currentLocation }} />;
    }

    if (user && currentLocation.pathname === RoutesEnum.ROOT) {
        return <Navigate to={redirectPathAuth} state={{ from: currentLocation }} />;
    }

    return <Outlet />;
};
