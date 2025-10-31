import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API base URL from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Only log in browser environment
if (typeof window !== 'undefined') {
  // console.log("Footer API_BASE_URL=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", API_BASE_URL);
  // console.log("Footer Environment NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
}

// Async thunk for fetching footer data
export const fetchFooterData = createAsyncThunk(
  'footer/fetchFooterData',
  async (_, { rejectWithValue }) => {
    try {
      if (!API_BASE_URL) {
        throw new Error('API_BASE_URL is not defined');
      }
      
      
      const response = await fetch(`${API_BASE_URL}/footer/category`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true', // Add this header to bypass ngrok warning
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Footer API Error:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  footerData: null,
  loading: false,
  error: null,
};

const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    clearFooterError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.loading = false;
        state.footerData = action.payload;
        state.error = null;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearFooterError } = footerSlice.actions;
export default footerSlice.reducer;
