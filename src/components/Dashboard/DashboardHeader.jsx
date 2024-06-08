import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
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
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          <FaBell className="text-xl cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-300" />
        </div>

        {user ? (
          <div
            className="relative dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            <div className="flex items-center cursor-pointer">
              <FaUserCircle className="text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </div>
            {showLogout && (
              <div className="absolute right-0 mt-2 py-2 bg-white shadow-lg rounded-md transition-all duration-300">
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default DashboardHeader;