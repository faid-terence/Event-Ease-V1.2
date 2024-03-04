// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchEventById, fetchEventWithTickets } from "../features/Redux/events/eventSlice";

// export const EventAbout = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   const { events, loading, hasErrors } = useSelector((state) => state.event);
//   const event = events.length > 0 ? events[0] : null;

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchEventById(id));
//     }
//   }, [dispatch, id]);
//   const eventDetails = {
//     date: "Every Sunday evening",
//     location: "Your Venue Name, Your City",
//   };

//   return (
//     <div>
//       <div>
//         <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
//           More About
//           <span className="text-[#5AA977] font-bold text-[24px] leading-9">
//             {event.Event_Name}
//           </span>
//         </h3>
//         <p className="text__para">{event.Event_Description}</p>
//       </div>
//     </div>
//   );
// };
