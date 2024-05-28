import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSclice";
import eventReducer from "./events/eventSlice";
import organizerReducer from "./organizer/organizerSlice";
import ticketReducer from "./Tickets/ticketSlice";
import orderReducer from "./orders/orderSlice";
import messageRuducer from "./messages/message-slice";
import paymentReducer from "./Payments/payment-slice";
import usersReducer from "./admin/admin-slice";
import documentUploadReducer from "./Documents/documentSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    organizer: organizerReducer,
    ticket: ticketReducer,
    order: orderReducer,
    messages: messageRuducer,
    payment: paymentReducer,
    users: usersReducer,
    document: documentUploadReducer,
  },
});
