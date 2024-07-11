import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
    children: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const user = sessionStorage.getItem("user");
    const location = useLocation();

    if (!user) {
        return <Navigate to="/Login" replace state={{ from: location.pathname, message: 'You must be logged in to view this page.' }} />;
    }

    return children;
};

export default ProtectedRoute;
