import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { assignTicketToEvent } from "../../../features/Redux/Tickets/ticketSlice";
import { toast } from "react-toastify";

export const CreateTicketModal = ({ isOpen, onClose, eventId }) => {
  const [ticketDetails, setTicketDetails] = useState({
    id: eventId, 
    category: "",
    price: "",
    availableQuantity: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(assignTicketToEvent(ticketDetails));
      if (result.payload) {
        const message = "Ticket created successfully!";
        toast.success(message);
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
      toast.error("Failed to create ticket");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="bg-white w-full max-w-md p-6 rounded-lg overflow-hidden shadow-md relative">
        <div className="absolute top-0 right-0 m-4">
          <button onClick={onClose}>
            <FaTimes className="cursor-pointer hover:bg-white" color="red" />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={ticketDetails.id} />
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Ticket Name
            </label>
            <input
              type="text"
              value={ticketDetails.category}
              name="category"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Price</label>
            <input
              type="number"
              value={ticketDetails.price}
              name="price"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <input
              type="number"
              name="availableQuantity"
              value={ticketDetails.availableQuantity}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn">
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
