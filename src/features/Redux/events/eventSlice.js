import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  const response = await fetch("http://localhost:3000/events");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (event, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include bearer token in headers
        },
        body: JSON.stringify(event),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create event");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchEventById = createAsyncThunk(
  "event/fetchEventById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3000/events/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

export const fetchEventWithTickets = createAsyncThunk(
  "event/fetchEventWithTickets",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3000/events/${id}/tickets`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: {
    loading: false,
    hasErrors: false,
    events: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.loading = true;
        state.events = [];
        state.hasErrors = false;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.events = [];
        state.hasErrors = true;
      });

    builder
      .addCase(fetchEventById.pending, (state, action) => {
        state.loading = true;
        state.events = [];
        state.hasErrors = false;
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = [action.payload];
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.loading = false;
        state.events = [];
        state.hasErrors = true;
      });

    builder
      .addCase(fetchEventWithTickets.pending, (state, action) => {
        state.loading = true;
        state.events = [];
        state.hasErrors = false;
      })
      .addCase(fetchEventWithTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = [action.payload];
      })
      .addCase(fetchEventWithTickets.rejected, (state, action) => {
        state.loading = false;
        state.events = [];
        state.hasErrors = true;
      });

    builder
      .addCase(createEvent.pending, (state, action) => {
        state.loading = true;
        state.events = [];
        state.hasErrors = false;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = [action.payload];
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.events = [];
        state.hasErrors = true;
      });
  },
});

export default eventSlice.reducer;
