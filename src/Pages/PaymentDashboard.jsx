import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import profile from "../assets/terence 1.png";
import Aside from "../components/Dashboard/Aside";
import { MyPayments } from "../components/Dashboard/Payments/MyPayments";

const user = {
  name: "John Doe",
  image: profile,
};

export const PaymentDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1">
          <MyPayments />
        </div>
      </div>
    </div>
  );
};
