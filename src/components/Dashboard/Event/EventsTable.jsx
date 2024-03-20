import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaTicketAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { organizerDeleteEvent } from "../../../features/Redux/organizer/organizerSlice";
import { toast } from "react-toastify";
import UpdateEventFormModal from "./UpdateEventFormModal";
import { CreateTicketModal } from "../Tickets/CreateTicketModal";

const EventTable = ({ events, openModal }) => {
  const dispatch = useDispatch();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isCreateTicketModalOpen, setCreateTicketModalOpen] = useState(false);

  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = (id) => {
    dispatch(organizerDeleteEvent(id));
    toast.success("Event deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleAssignTickets = (eventId) => {
    setSelectedEventId(eventId);
    setCreateTicketModalOpen(true);
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
                <button className="mr-2" onClick={() => handleEdit(event)}>
                  <FaEdit color="blue" />
                </button>
                <button
                  className="mr-2"
                  onClick={() => handleAssignTickets(event.id)}
                >
                  <FaTicketAlt color="green" />
                </button>
                <button onClick={() => handleDelete(event.id)}>
                  <FaTrash color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEvent && (
        <UpdateEventFormModal
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          eventData={selectedEvent}
        />
      )}
      {isCreateTicketModalOpen && (
        <CreateTicketModal
          isOpen={isCreateTicketModalOpen}
          onClose={() => setCreateTicketModalOpen(false)}
          eventId={selectedEventId}
        />
      )}
    </div>
  );
};

export default EventTable;
