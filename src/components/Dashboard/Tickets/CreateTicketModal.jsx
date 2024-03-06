import React from "react";
import { FaTimes } from "react-icons/fa";

export const CreateTicketModal = ({ isOpen, onClose }) => {
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
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Ticket Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex justify-end">
            <button className="btn">Create Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
};
