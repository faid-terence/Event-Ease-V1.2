import React, { useEffect, useState } from "react";
import { EventCard } from "../components/Event/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../features/Redux/events/eventSlice";

export const Event = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.event);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    handleSearch();
  }, [events, searchQuery]);

  const handleSearch = () => {
    const filtered = events.filter((event) =>
      event.Event_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (filteredEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            No Events Found
          </h1>
          <p className="text-gray-600 text-center">
            It looks like there are no events matching your search. Please try a
            different search term.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="heading">Find Events</h2>
          <div className="max-w-[570px] mt-[10px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search an event"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              eventImage={event.Event_Image}
              title={event.Event_Name}
              location={event.Event_Location}
              price={event.Event_Price}
              venue={event.Event_Venue}
              dateTime={event.Event_Date}
              description={event.Event_Description}
              linkPath={`/events/${event.id}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
