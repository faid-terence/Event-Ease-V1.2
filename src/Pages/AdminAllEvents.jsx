import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import AdminAside from "../components/Dashboard/AdminAside";
import { AllEvents } from "../components/Dashboard/Event/AllEvents";

export const AdminAllEvents = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-1">
        <AdminAside />
        <div className="flex-1">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};
