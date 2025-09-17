// slices/homePageSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log("Home Page API_BASE_URL=>>>>>>>>>>>>>>>>>>>>>>>>>>:", API_BASE_URL);
console.log("Home Page Environment NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

// Async thunk for fetching Home Page data
export const fetchHomePage = createAsyncThunk(
  "homePage/fetchHomePage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/home`, {
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
      console.warn("Home Page API failed:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const homePageSlice = createSlice({
  name: "homePage",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomePage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomePage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default homePageSlice.reducer;
