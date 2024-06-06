import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTicketAlt, FaUser, FaMoneyBillAlt } from "react-icons/fa";

const AdminAside = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-primaryColor text-white flex flex-col min-h-screen">
      <div className="p-10 flex-shrink-0">
        <h2 className="text-4xl font-bold mb-4 px-[60px]">TickNet</h2>
        <span className="px-2">
          Your Ultimate solution for Event Management
        </span>
      </div>
      <nav className="flex-grow flex flex-col justify-center">
        <ul>
          <li className={`mb-4 ${isActive("/dashboard") && "active"}`}>
            <Link
              to="/dashboard"
              className="block py-2 px-4 text-lg rounded hover:bg-primaryColorLight transition-colors"
            >
              <FaHome className="mr-2 inline-block" />
              Dashboard
            </Link>
          </li>
          <li className={`mb-4 ${isActive("/all-events") && "active"}`}>
            <Link
              to="/all-events"
              className="block py-2 px-4 text-lg rounded hover:bg-primaryColorLight transition-colors"
            >
              <FaTicketAlt className="mr-2 inline-block" />
              All Events
            </Link>
          </li>
          <li className={`mb-4 ${isActive("/all-users") && "active"}`}>
            <Link
              to="/all-users"
              className="block py-2 px-4 text-lg rounded hover:bg-primaryColorLight transition-colors"
            >
              <FaUser className="mr-2 inline-block" />
              All Users
            </Link>
          </li>
          <li className={`mb-4 ${isActive("/all-payments") && "active"}`}>
            <Link
              to="/all-payments"
              className="block py-2 px-4 text-lg rounded hover:bg-primaryColorLight transition-colors"
            >
              <FaMoneyBillAlt className="mr-2 inline-block" />
              All Payments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAside;
