import React from "react";
import "./Card.css";
import eventImage from "../../assets/images/img1.jpg";

export const EventCard = ({
  eventImage,
  title,
  location,
  price,
  venue,
  dateTime,
  description,
}) => {
  return (
    <div className="item-container">
      <div className="img-container">
        <img src={eventImage} alt="Event image" />
      </div>

      <div className="body-container">
        <div className="overlay"></div>

        <div className="event-info">
          <p className="title">{title}</p>
          <div className="separator"></div>
          <p className="info">{location}</p>
          <p className="price">{price}</p>

          <div className="additional-info">
            <p className="info">
              <i className="fas fa-map-marker-alt"></i>
              {venue}
            </p>
            <p className="info">
              <i className="far fa-calendar-alt"></i>
              {dateTime}
            </p>

            <p className="info description">
              {description} <span>more...</span>
            </p>
          </div>
        </div>
        <button className="action">Book it</button>
      </div>
    </div>
  );
};
