import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "../features/Redux/events/eventSlice";
import { useParams } from "react-router-dom";

const SingleEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { events, loading, hasErrors } = useSelector((state) => state.event);

  useEffect(() => {
    if (id) {
      dispatch(fetchEventById(id));
    }
  }, [dispatch, id]);

  // Access the event object from the events array
  const event = events.length > 0 ? events[0] : null;

  return (
    <div className="container mt-5">
      {loading && <div>Loading...</div>}
      {hasErrors && <div>Error fetching event.</div>}
      {event && (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{event.Event_Name}</h2>
            <p className="card-text">
              <strong>Date:</strong> {event.Event_Date}
            </p>
            <p className="card-text">
              <strong>Description:</strong> {event.Event_Description}
            </p>
            <p className="card-text">
              <strong>Location:</strong> {event.Event_Location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleEvent;
