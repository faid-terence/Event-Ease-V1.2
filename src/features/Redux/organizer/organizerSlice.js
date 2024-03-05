import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchOrganizerEvent = createAsyncThunk(
  "organizer/fetchOrganizerEvent",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`http://localhost:3000/events/organizer`, {
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

export const organizerDeleteEvent = createAsyncThunk(
  "organizer/organizerDeleteEvent",
  async (id, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return rejectWithValue("Token not found");
    }
    const response = await fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
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
  },
});

export default organizerSlice.reducer;
