import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectAdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      const token = localStorage.getItem("token");
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const isAdmin = decodedToken.isAdmin;

      if (!isAdmin) {
        navigate("/");
        toast.error("You are not authorized to access this page");
      }
    } else {
      navigate("/auth/signin");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectAdminRoutes;
