import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async (message, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default messageSlice.reducer;
