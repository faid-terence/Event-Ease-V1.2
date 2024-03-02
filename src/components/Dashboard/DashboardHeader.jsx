import React from "react";
import { FaBell } from "react-icons/fa";
import defaultUserImage from "../../assets/terence 1.png";

const DashboardHeader = ({ user }) => {
  return (
    <div className="absolute top-10 right-10 p-2">
      <header className="flex items-center justify-between">
        <div className="flex items-center mr-8">
          {" "}
          <FaBell className="text-xl cursor-pointer" color="black" />
        </div>
        <div className="flex items-center cursor-pointer">
          {user && user.image ? (
            <img
              src={user.image}
              alt="User Profile"
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <img
              src={defaultUserImage}
              alt="Default User Profile"
              className="w-8 h-8 rounded-full mr-2 "
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
