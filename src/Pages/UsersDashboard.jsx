import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import AdminAside from "../components/Dashboard/AdminAside";
import Users from "../components/Dashboard/Users/Users";

export const UsersDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-1">
        <AdminAside />
        <div className="flex-1">
          <Users />
        </div>
      </div>
    </div>
  );
};
