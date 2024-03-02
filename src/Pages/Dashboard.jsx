import React from "react";
import Aside from "../components/Dashboard/Aside";
import EventTable from "../components/Dashboard/Event/EventsTable";
import  {MyEvents}  from "../components/Dashboard/Event/MyEvents";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import profile from "../assets/terence 1.png";

const user = {
  name: "John Doe",
  image: profile,
};

export const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1">
          <MyEvents />
        </div>
      </div>
    </div>
  );
};
