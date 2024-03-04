import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchOrganizerEvent = createAsyncThunk(
  "organizer/fetchOrganizerEvent",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3000/events/organizer`);
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
  },
});

export default organizerSlice.reducer;
