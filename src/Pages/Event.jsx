import React, { useEffect, useState } from "react";
import { EventCard } from "../components/Event/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../features/Redux/events/eventSlice";
import { format, subDays, addDays } from "date-fns";

export const Event = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.event);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 180));
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    handleSearch();
  }, [events, searchQuery, startDate, endDate]);

  const handleSearch = () => {
    let filtered = events;

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((event) =>
        event.Event_Name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter(
        (event) =>
          new Date(event.Event_Date) >= startDate &&
          new Date(event.Event_Date) <= endDate
      );
    }

    setFilteredEvents(filtered);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
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
            It looks like there are no events matching your search criteria.
            Please try a different search or date range.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Find Events</h2>
          <div className="w-[800px] mx-auto bg-white rounded-md flex items-center justify-between shadow-md">
            <input
              type="search"
              className="py-2 px-4 bg-transparent w-full focus:outline-none placeholder-gray-400"
              placeholder="Search an event"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <div className="flex items-center">
              <label htmlFor="start-date" className="mr-2">
                Start Date:
              </label>
              <input
                type="date"
                id="start-date"
                value={format(startDate, "yyyy-MM-dd")}
                onChange={handleStartDateChange}
                className="py-2 px-4 bg-transparent focus:outline-none"
              />
              <label htmlFor="end-date" className="mx-2">
                End Date:
              </label>
              <input
                type="date"
                id="end-date"
                value={format(endDate, "yyyy-MM-dd")}
                onChange={handleEndDateChange}
                className="py-2 px-4 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
