import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Aside from "../components/Dashboard/Aside";
import UserProfile from "./userProfile";
import profile from "../assets/terence 1.png";
import ProfileDashboard from "./ProfileDashboard";

const user = {
  name: "John Doe",
  image: profile,
};

export const MyProfileDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1">
          <ProfileDashboard />
        </div>
      </div>
    </div>
  );
};
