import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoutes = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Redirect to the signin page using navigate
    navigate("/auth/signin");
    // Return null or a loading spinner while navigating
    return null;
  }

  // Render the children if the user is authenticated
  return <div>{children}</div>;
};

export default ProtectRoutes;
