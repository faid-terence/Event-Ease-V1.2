import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;


export const assignTicketToEvent = createAsyncThunk(
  "ticket/assignTicketToEvent",
  async (ticketDetails, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        `${API_URL}/tickets/${ticketDetails.eventId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(ticketDetails),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTickets = createAsyncThunk(
  "ticket/fetchTickets",
  async () => {
    const response = await fetch(`${API_URL}/tickets`);
    const data = await response.json();
    return data;
  }
);

export const sendTicketToEmail = createAsyncThunk(
  "ticket/sendTicketToEmail",
  async (ticketDetails, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        `${API_URL}/tickets/send-ticket`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(ticketDetails),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    loading: false,
    hasErrors: false,
    tickets: [],
  },
  extraReducers: (builder) => {
    builder.addCase(assignTicketToEvent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(assignTicketToEvent.fulfilled, (state, { payload }) => {
      state.tickets.push(payload);
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(assignTicketToEvent.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });

    builder.addCase(fetchTickets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTickets.fulfilled, (state, { payload }) => {
      state.tickets = payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchTickets.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default ticketSlice.reducer;
