import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSclice";
import eventReducer from "./events/eventSlice";
import organizerReducer from "./organizer/organizerSlice";
import ticketReducer from './Tickets/ticketSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    organizer: organizerReducer,
    ticket: ticketReducer,
  },
});
