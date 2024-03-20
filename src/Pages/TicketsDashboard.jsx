import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Aside from "../components/Dashboard/Aside";
import { MyTickets } from "../components/Dashboard/Tickets/MyTickets";

export const TicketsDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1">
          <MyTickets />
        </div>
      </div>
    </div>
  );
};
