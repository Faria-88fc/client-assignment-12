import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        user.email ? children :
            <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;