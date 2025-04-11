import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../modules/user/slice/authSlice';

interface ProtectedRouteProps {
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/login' }) => {
    const user = useSelector(selectUser);

    const currentLocation = useLocation();

    if (!user) {
        return <Navigate to={redirectPath} state={{ from: currentLocation }} />;
    }
    return <Outlet />;
};
