import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import defaultUserImage from "../../assets/terence 1.png";
import { useNavigate } from "react-router-dom";

function getUser() {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userName = decodedToken.name;
      const profileImage = decodedToken.photo;

      return { userName, profileImage };
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

const DashboardHeader = () => {
  const [user, setUser] = useState(getUser());
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const defaultImage =
    "http://res.cloudinary.com/faid-terence/image/upload/v1711803562/aiswa8jcv6rzztbnnly3.jpg";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setShowLogout(false);
    navigate("/auth/signin");
  };

  return (
    <div className="absolute top-10 right-10 p-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center mr-8">
          <FaBell className="text-xl cursor-pointer" color="black" />
        </div>

        {user ? (
          <div
            className="flex items-center cursor-pointer"
            onMouseEnter={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            <img
              src={defaultImage}
              alt="User Profile"
              className="w-8 h-8 rounded-full mr-2"
              onClick={handleLogout}
            />
            {showLogout && user && (
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            )}
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default DashboardHeader;
