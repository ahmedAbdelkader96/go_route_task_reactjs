import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    // Redirect to /auth if no access token is found
    return <Navigate to="/auth" replace />;
  }

  // Render the requested component if authenticated
  return <>{children}</>;
};

export default PrivateRoute;