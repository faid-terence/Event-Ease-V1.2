import React, { useState, useEffect } from "react";
import EventTable from "./EventsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../features/Redux/events/eventSlice";
import { adminFetchEvents } from "../../../features/Redux/events/eventSlice";
import { AdminEventTable } from "./AdminEventTable";

export const AllEvents = () => {
  const dispatch = useDispatch();

  const { events, loading, error } = useSelector((state) => state.event);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(adminFetchEvents());
  }, [dispatch]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

      <AdminEventTable events={events} openModal={openModal} />
    </>
  );
};
