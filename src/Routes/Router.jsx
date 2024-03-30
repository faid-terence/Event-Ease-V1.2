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
import { TicketsDashboard } from "../Pages/TicketsDashboard";
import ProfileDashboard from "../Pages/ProfileDashboard";
import UserProfile from "../Pages/userProfile";
import { UsersDashboard } from "../Pages/UsersDashboard";
import { AdminAllEvents } from "../Pages/AdminAllEvents";
import ProtectAdminRoutes from "./ProtectAdminRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <MyTicketsPage />
          </ProtectedRoute>
        }
      />
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
      <Route
        path="/create-event"
        element={
          <ProtectedRoute>
            <CreateEventPage />
          </ProtectedRoute>
        }
      />
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
          <ProtectAdminRoutes>
            <PaymentDashboard />
          </ProtectAdminRoutes>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <MyOrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verify-email"
        element={
          <PopUp
            title="Success"
            description="Please check your email for a verification link to complete your account setup."
          />
        }
      />
      <Route
        path="/dahboard-tickets"
        element={
          <ProtectedRoute>
            <TicketsDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute>
            <ProfileDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/all-users"
        element={
          <ProtectAdminRoutes>
            <UsersDashboard />
          </ProtectAdminRoutes>
        }
      />
      <Route
        path="/all-events"
        element={
          <ProtectAdminRoutes>
            <AdminAllEvents />
          </ProtectAdminRoutes>
        }
      />
    </Routes>
  );
};
