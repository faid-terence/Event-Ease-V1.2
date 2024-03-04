import React, { useEffect, useState } from "react";
import EventTable from "./EventsTable";
import CreateEventFormModal from "./CreateEventFormModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrganizerEvent } from "../../../features/Redux/organizer/organizerSlice";

const eventsData = [
  { id: 1, name: "Concert", date: "2024-02-15", location: "City Hall" },
  {
    id: 2,
    name: "Conference",
    date: "2024-03-10",
    location: "Conference Center",
  },
];

export const MyEvents = () => {
  const dispatch = useDispatch();

  const { events, loading, error } = useSelector((state) => state.event);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchOrganizerEvent());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="max-w-[570px] mt-[100px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
        <input
          type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search for an event"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md  ">
          Search
        </button>
      </div>
      <EventTable events={eventsData} openModal={openModal} />;
      <CreateEventFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
