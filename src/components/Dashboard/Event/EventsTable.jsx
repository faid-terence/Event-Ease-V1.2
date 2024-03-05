import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { organizerDeleteEvent } from "../../../features/Redux/organizer/organizerSlice";
import { toast } from "react-toastify";

const EventTable = ({ events, openModal }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(organizerDeleteEvent(id));
    toast.success("Event deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="overflow-x-auto px-10 mt-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Event List</h2>
        <button onClick={openModal} className="btn">
          Add New Event
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#EAEAEA]">
            <th className="py-3 px-4 text-left">Event Name</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Location</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-200"
            >
              <td className="py-3 px-4">{event.Event_Name}</td>
              <td className="py-3 px-4">{event.Event_Date}</td>
              <td className="py-3 px-4">{event.Event_Location}</td>
              <td className="py-3 px-4">
                <button className="mr-2">
                  <FaEye />
                </button>
                <button className="mr-2">
                  <FaEdit color="blue" />
                </button>
                <button onClick={() => handleDelete(event.id)}>
                  <FaTrash color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
