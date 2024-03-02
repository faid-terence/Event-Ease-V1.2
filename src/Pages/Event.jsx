import React, { useState } from "react";
import { EventCard } from "../components/Event/Card";
import eventImage from "../assets/images/img1.jpg";
import eventImageII from "../assets/images/img2.jpg";
import eventImageIII from "../assets/images/img3.jpg";
import eventImageIV from "../assets/images/img4.jpg";
import ReactPaginate from "react-paginate";

const events = [
  {
    eventImage: eventImage,
    title: "Bubbe's Book Club",
    location: "Bellmore, NY",
    price: "Free",
    venue: "Grand Central Terminal",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageII,
    title: "The Overstory",
    location: "New York, NY",
    price: "29$",
    venue: "245 W 52nd St, New York",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageIII,
    title: "Bubbe's Book Club",
    location: "Bellmore, NY",
    price: "Free",
    venue: "Grand Central Terminal",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageIV,
    title: "The Overstory",
    location: "New York, NY",
    price: "29$",
    venue: "245 W 52nd St, New York",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageIV,
    title: "Bubbe's Book Club",
    location: "Bellmore, NY",
    price: "Free",
    venue: "Grand Central Terminal",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageIII,
    title: "The Overstory",
    location: "New York, NY",
    price: "29$",
    venue: "245 W 52nd St, New York",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImageII,
    title: "Bubbe's Book Club",
    location: "Bellmore, NY",
    price: "Free",
    venue: "Grand Central Terminal",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
  {
    eventImage: eventImage,
    title: "The Overstory",
    location: "New York, NY",
    price: "29$",
    venue: "245 W 52nd St, New York",
    dateTime: "Sat, Sep 24, 10:00 AM EDT",
    description:
      "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening",
  },
];

export const Event = () => {
  const eventsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const slicedEvents = events.slice(startIndex, endIndex);
  return (
    <>
      <section>
        <div className="container text-center">
          <h2 className="heading">Find Events</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search for an event"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-full">
            <h2 className="heading pl-8">Upcoming events : </h2>
          </div>
          <EventCard
            eventImage={eventImage}
            title="Bubbe's Book Club"
            location="Bellmore, NY"
            price="Free"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 24, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageII}
            title="The Overstory"
            location="New York, NY"
            price="29$"
            venue="245 W 52nd St, New York"
            dateTime="Sat, Sep 24, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageIII}
            title="The NY Festival"
            location="Bellmore, NY"
            price="70$"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 24, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageIV}
            title="Tech Bubble Conf"
            location="Bellmore, NY"
            price="65$"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 19, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageIV}
            title="Tech Bubble Conf"
            location="Bellmore, NY"
            price="65$"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 19, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageIII}
            title="The NY Festival"
            location="Bellmore, NY"
            price="70$"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 19, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImageII}
            title="The Overstory"
            location="Bellmore, NY"
            price="39$"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 19, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
          <EventCard
            eventImage={eventImage}
            title="Bubbe's Book Club"
            location="Bellmore, NY"
            price="Free"
            venue="Grand Central Terminal"
            dateTime="Sat, Sep 19, 10:00 AM EDT"
            description="Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening"
          />
        </div>
      </section> */}

      <section>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {slicedEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(events.length / eventsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
};
