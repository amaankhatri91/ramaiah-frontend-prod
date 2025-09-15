// slices/heroSectionSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

console.log("Hero Section API_BASE_URL=>>>>>>>>>>>>>>>>>>>>>>>>>>:", API_BASE_URL);
console.log("Hero Section Environment NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

// Async thunk for fetching Hero Section
export const fetchHeroSection = createAsyncThunk(
  "heroSection/fetchHeroSection",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/home/section/hero`, {
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
      console.warn("Hero Section API failed:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const heroSectionSlice = createSlice({
  name: "heroSection",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeroSection.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHeroSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default heroSectionSlice.reducer;
