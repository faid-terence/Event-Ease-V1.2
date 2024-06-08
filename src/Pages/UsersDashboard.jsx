import React, { useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import AdminAside from "../components/Dashboard/AdminAside";
import Users from "../components/Dashboard/Users/Users";
import { FaBars, FaTimes } from "react-icons/fa";

export const UsersDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white shadow md:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleSidebar}
          >
            {showSidebar ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          <DashboardHeader />
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } md:block bg-primaryColor text-white w-1/4 min-h-screen transition-all duration-300`}
        >
          <AdminAside />
        </div>
        <main
          className={`flex-1 transition-all duration-300 ${
            showSidebar ? "md:ml-[25%]" : ""
          }`}
        >
          <div className="p-4">
            <Users />
          </div>
        </main>
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`}
          onClick={toggleSidebar}
        ></div>
      </div>
    </div>
  );
};
