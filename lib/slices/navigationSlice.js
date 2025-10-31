// slices/navigationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


// Async thunk for fetching Navigation Menu data
export const fetchNavigationMenu = createAsyncThunk(
  "navigation/fetchNavigationMenu",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/navigation/menu`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data; // you can transform here if needed
    } catch (error) {
      console.warn("Navigation Menu API failed:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigationMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNavigationMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNavigationMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default navigationSlice.reducer;
