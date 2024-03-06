import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const assignTicketToEvent = createAsyncThunk(
  "ticket/assignTicketToEvent",
  async (ticketDetails, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/tickets/${ticketDetails.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
  },
});

export default ticketSlice.reducer;
