import React from "react";
import "./About.css";

export const TickNetAbout = () => {
  return (
    <div className="about-container">
      <div className="dark-background" />
      <div className="number-box users">
        100000
        <br />
      </div>
      <div className="headline">
        Streamlining the process of event ticketing
      </div>
      <div className="description-text">
        At TickNet, we believe that buying tickets for your favourite events
        should be as seamless as possible. We aim to make it smooth.
      </div>
      <div className="number-box events">
        5000
        <br />
      </div>
      <div className="number-box tickets">2000</div>
      <div className="subheadline active-users">Active Users</div>
      <div className="subheadline global-events">Global Events</div>
      <div className="subheadline tickets-sold">Tickets Sold</div>
    </div>
  );
};