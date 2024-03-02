import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  const response = await fetch("http://localhost:3000/events");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
});

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

const eventSlice = createSlice({
  name: "event",
  initialState: {
    loading: false,
    hasErrors: false,
    events: [] ,
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
  },
});

export default eventSlice.reducer;
