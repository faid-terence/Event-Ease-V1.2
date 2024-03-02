import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSclice";
import eventReducer from "./events/eventSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    
  },
});
