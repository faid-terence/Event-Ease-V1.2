import React, { useState , useEffect} from "react";
import EventTable from "./EventsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../../features/Redux/events/eventSlice";

export const AllEvents = () => {
  const dispatch = useDispatch();

  const { events, loading, error } = useSelector((state) => state.event);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(events);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>
        <input
          type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search for an event"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md  ">
          Search
        </button>
      </div>

      <EventTable events={events} openModal={openModal} />
    </>
  );
};
