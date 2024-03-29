import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Event } from "../Pages/Event";
import { Contact } from "../Pages/Contact";
import { SignUp } from "../Pages/SignUp";
import { Login } from "../Pages/Login";
import { EventDetails } from "../Pages/EventDetails";
import CreateEventPage from "../Pages/CreateEventPage";
import MyTicketsPage from "../components/Tickets/MyTickets";
import { Dashboard } from "../Pages/Dashboard";
import { PaymentDashboard } from "../Pages/PaymentDashboard";
import { PopUp } from "../components/POPUPS/PopUp";
import MyOrdersPage from "../Pages/MyOrders";
import ProtectedRoute from "./ProtectedRoute";
import { ResetPassword } from "../Pages/ResetPassword";
import { SetNewPassword } from "../Pages/SetNewPassword";
import { EmailVerified } from "../Pages/EmailVerified";
import { MyTickets } from "../components/Dashboard/Tickets/MyTickets";
import { TicketsDashboard } from "../Pages/TicketsDashboard";
import { MyPayments } from "../components/Dashboard/Payments/MyPayments";
import ProfileDashboard from "../Pages/ProfileDashboard";
import UserProfile from "../Pages/userProfile";
import { MyProfileDashboard } from "../Pages/MyProfileDashboard";
import Users from "../components/Dashboard/Users/Users";
import { UsersDashboard } from "../Pages/UsersDashboard";
import { AllEvents } from "../components/Dashboard/Event/AllEvents";
import { AdminAllEvents } from "../Pages/AdminAllEvents";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/tickets" element={<MyTicketsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth/signin" element={<Login />} />
      <Route path="/auth/register" element={<SignUp />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route
        path="/auth/email-verified/:verifcationToken"
        element={<EmailVerified />}
      />
      <Route
        path="/auth/set-new-password/:token"
        element={<SetNewPassword />}
      />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route
        path="/my-events"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <PaymentDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/orders" element={<MyOrdersPage />} />
      <Route
        path="/verify-email"
        element={
          <PopUp
            title="Success"
            description="Please check your email for a verification link to complete your account setup."
          />
        }
      />
      <Route path="/dahboard-tickets" element={<TicketsDashboard />} />
      <Route path="/my-profile" element={<ProfileDashboard />} />
      <Route path="/profile" element={<MyProfileDashboard />} />
      <Route path="/all-users" element={<UsersDashboard />} />
      <Route path="/all-events" element={<AdminAllEvents />} />
    </Routes>
  );
};
