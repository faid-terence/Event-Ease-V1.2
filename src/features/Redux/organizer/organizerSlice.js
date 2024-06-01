import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchOrganizerEvent = createAsyncThunk(
  "organizer/fetchOrganizerEvent",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`${API_URL}/events/organizer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      return rejectWithValue(error);
    }
    const data = await response.json();
    return data;
  }
);

export const organizerFetchTickets = createAsyncThunk(
  "organizer/organizerFetchTickets",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`${API_URL}/tickets/organizer`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      return rejectWithValue(error);
    }
    const data = await response.json();
    return data;
  }
);

export const organizerUpdateEvent = createAsyncThunk(
  "organizer/organizerUpdateEvent",
  async (event, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`${API_URL}/events/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(event),
    });
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return rejectWithValue(error);
    }
    const data = await response.json();
    return data;
  }
);

export const organizerDeleteEvent = createAsyncThunk(
  "organizer/organizerDeleteEvent",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return rejectWithValue(error);
    }
    const data = await response.json();
    return data;
  }
);

const organizerSlice = createSlice({
  name: "organizer",
  initialState: {
    loading: false,
    hasErrors: false,
    events: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizerEvent.pending, (state, action) => {
        state.loading = true;
        state.events = [];
        state.hasErrors = false;
      })
      .addCase(fetchOrganizerEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = action.payload;
      })
      .addCase(fetchOrganizerEvent.rejected, (state, action) => {
        state.loading = false;
        state.events = [];
        state.hasErrors = true;
      });

    builder
      .addCase(organizerDeleteEvent.pending, (state, action) => {
        state.loading = true;
        state.hasErrors = false;
      })
      .addCase(organizerDeleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = state.events.filter(
          (event) => event.id !== action.payload.id
        );
      })
      .addCase(organizerDeleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = true;
      });

    builder

      .addCase(organizerUpdateEvent.pending, (state, action) => {
        state.loading = true;
        state.hasErrors = false;
      })
      .addCase(organizerUpdateEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.events = state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        );
      })
      .addCase(organizerUpdateEvent.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = true;
      });

    builder
      .addCase(organizerFetchTickets.pending, (state, action) => {
        state.loading = true;
        state.hasErrors = false;
      })
      .addCase(organizerFetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.tickets = action.payload;
      })
      .addCase(organizerFetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export default organizerSlice.reducer;
