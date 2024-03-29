import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const assignTicketToEvent = createAsyncThunk(
  "ticket/assignTicketToEvent",
  async (ticketDetails, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return rejectWithValue("Token not found");
      }
      const response = await fetch(
        `http://localhost:3000/tickets/${ticketDetails.id}`,
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
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTickets = createAsyncThunk(
  "ticket/fetchTickets",
  async () => {
    const response = await fetch("http://localhost:3000/tickets");
    const data = await response.json();
    return data;
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
