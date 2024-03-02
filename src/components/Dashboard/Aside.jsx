import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCreditCard, FaTicketAlt, FaUser } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="bg-primaryColor text-white w-1/4 min-h-screen">
      <div className="p-10">
        <h2 className="text-4xl font-bold mb-4 px-[60px]">TickNet</h2>
        <span className="px-2">
          Your Ultimate solution for Event Management
        </span>
        <ul>
          <li className="mt-[200px]">
            <Link to="/" className="block py-2 px-4">
              <FaHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mt-[40px]">
            <Link to="/payments" className="block py-2 px-4">
              <FaCreditCard className="mr-2" />
              My Payments
            </Link>
          </li>
          <li className="mt-[40px]">
            <Link to="/my-events" className="block py-2 px-4">
              <FaTicketAlt className="mr-2" />
              My Events
            </Link>
          </li>
          <li className="mt-[40px]">
            <Link to="/my-profile" className="block py-2 px-4">
              <FaUser className="mr-2" />
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
