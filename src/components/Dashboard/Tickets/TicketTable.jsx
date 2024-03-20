import React from "react";
import { FaEye, FaEdit, FaTrash, FaTicketAlt } from "react-icons/fa";

export const TicketTable = ({ tickets, openModal }) => {
  return (
    <div className="overflow-x-auto px-10 mt-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Ticket List</h2>
        <button onClick={openModal} className="btn">
          Add New Ticket
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#EAEAEA]">
            <th className="py-3 px-4 text-left">Ticket ID</th>
            <th className="py-3 px-4 text-left">Ticket Category</th>
            <th className="py-3 px-4 text-left">Ticket Price</th>
            <th className="py-3 px-4 text-left">Availability</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-200"
              >
                <td className="py-3 px-4">{ticket.id}</td>
                <td className="py-3 px-4">{ticket.category}</td>
                <td className="py-3 px-4">{ticket.price}</td>
                <td className="py-3 px-4">{ticket.availableQuantity}</td>
                <td className="py-3 px-4">
                  <button className="mr-2">
                    <FaEye />
                  </button>
                  <button className="mr-2" onClick={() => handleEdit(ticket)}>
                    <FaEdit color="blue" />
                  </button>
                  <button
                    className="mr-2"
                    onClick={() => handleAssignTicket(ticket.id)}
                  >
                    <FaTicketAlt color="green" />
                  </button>
                  <button onClick={() => handleDelete(ticket.id)}>
                    <FaTrash color="red" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Removed references to isCreateTicketModalOpen */}
    </div>
  );
};
