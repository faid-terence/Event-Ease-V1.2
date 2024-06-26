import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchEventById,
  fetchEventWithTickets,
} from "../features/Redux/events/eventSlice";
import { EventAbout } from "./EventAbout";
import { Feedback } from "./Feedback";
import { Panel } from "../components/Tickets/Panel";

export const EventDetails = () => {
  const [tab, setTab] = useState("about");
  const dispatch = useDispatch();
  const { id } = useParams();
  const { events, loading, hasErrors } = useSelector((state) => state.event);

  useEffect(() => {
    if (id) {
      dispatch(fetchEventById(id));
    }
  }, [dispatch, id]);

  const event = events.length > 0 ? events[0] : null;
  return (
    <section>
      <div className="container px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              {loading && <div>Loading...</div>}
              {hasErrors && <div>Error fetching event.</div>}
              {event && (
                <>
                  <figure className="max-w-[300px] max-h-[300px]">
                    <img
                      src={event.Event_Image}
                      alt="Event Image"
                      className="w-full"
                    />
                  </figure>
                  <div>
                    <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                      {event.Event_Name}
                    </h3>
                    <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                      {event.Event_Description}
                    </p>

                    <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                      <strong>Location:</strong> {event.Event_Location}
                    </p>
                    <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                      <strong>Venue:</strong> {event.Event_Venue}
                    </p>
                    <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                      <strong>Date:</strong> {event.Event_Date.split("T")[0]}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-[100px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
            </div>
            <div className="mt-[50px]">
              <EventAbout />
            </div>
          </div>
          <div>
            <Panel />
          </div>
        </div>
      </div>
    </section>
  );
};
