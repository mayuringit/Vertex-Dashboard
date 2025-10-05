import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserRole } from "../Utils/auth";

const RoleProtectedRoute = ({ allowedRoles, children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    const role = getUserRole();
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RoleProtectedRoute;