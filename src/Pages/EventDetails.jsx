import eventImage from "../assets/images/img1.jpg";
import React, { useState } from "react";
import { EventAbout } from "./EventAbout";
import { Feedback } from "./Feedback";
import { Panel } from "../components/Tickets/Panel";

export const EventDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="container px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[300px] max-h-[300px]">
                <img src={eventImage} alt="" className="w-full" />
              </figure>

              <div>
                {/* <span className="py-1 px-6 lg:py-2 lg:px-6 text-[12px]">
        Event
    </span> */}

                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Bubbe's Book Club
                </h3>
                <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                  Welcome! Everyone has a unique perspective after reading a
                  book, and we would love you to share yours with us! We meet
                  one Sunday evening
                </p>

                <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                  <strong>Location:</strong> Bellmore, NY
                </p>
                <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                  <strong>Venue:</strong> Grand Central Terminal
                </p>
                <p className="text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-2">
                  <strong>Date:</strong> Sat, Sep 24, 10:00 AM EDT
                </p>
              </div>
            </div>

            <div className="mt-[100px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab == "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab == "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedbacks
              </button>
            </div>
            <div className="mt-[50px]">
              {tab == "about" && <EventAbout />}
              {tab == "feedback" && <Feedback />}
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
