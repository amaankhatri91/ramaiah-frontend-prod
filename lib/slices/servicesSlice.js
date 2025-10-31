import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API base URL from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;



// Mock data for testing when API is not available
const mockSiteSettings = {
  header1: {
    generalEnquiries: {
      label: "General Enquiries :",
      number: "+91 80 6215 3300"
    },
    emergencyNumber: {
      label: "Emergency Number :",
      number: "+91 80 6215 3400"
    },
    preBookAppointments: {
      label: "Pre-Book Your Appointments :",
      number: "1800 123 1133"
    },
    affiliationImage: "/assets/affilliation.svg",
    searchIcon: "/assets/search.svg.svg",
    emergencyIcon: "/assets/Simplification.svg"
  },
  header2: {
    logo: "/assets/logo.svg",
    navigation: [
      { name: "About Us", href: "/about", hasDropdown: true },
      { name: "Our Specialities", href: "/specialities", hasDropdown: true },
      { name: "International Patient Care", href: "/international-patients", hasDropdown: false },
      { name: "Careers", href: "/careers", hasDropdown: true },
      { name: "#What's New", href: "/trending", hasDropdown: false },
      { name: "Contact Us", href: "/contact", hasDropdown: false }
    ]
  },
  siteInfo: {
    name: "Ramaiah Memorial Hospital",
    description: "Comprehensive Healthcare Services"
  },
  rawSettings: [] // Empty array for mock data
};

// Helper function to transform API data to component-friendly format
const transformSiteSettings = (apiData) => {
  if (!apiData || !apiData.data) return mockSiteSettings;
  
  const settings = {};
  apiData.data.forEach(setting => {
    settings[setting.setting_key] = setting.setting_value;
  });


  return {
    header1: {
      generalEnquiries: {
        label: "General Enquiries :",
        number: settings.general_enquiries || "+91 80 6215 3300"
      },
      emergencyNumber: {
        label: "Emergency Number :",
        number: settings.emergency_number || "+91 80 6215 3400"
      },
      preBookAppointments: {
        label: "Pre-Book Your Appointments :",
        number: settings.pre_book_your_appointments || "1800 123 1133"
      },
      affiliationImage: settings.in_affiliation_with || "/assets/affilliation.svg",
      searchIcon: settings.content_search_icon || "/assets/search.svg.svg",
      emergencyIcon: settings.ambulance_logo || "/assets/Simplification.svg"
    },
    header3: {
      logo: settings.site_logo || "/assets/logo.svg",
      siteName: settings.site_name || "Ramaiah Memorial Hospital",
      siteTagline: settings.site_tagline || "#LifeGetsBetter",
      certifications: [
        settings.certification_one,
        settings.certification_two,
        settings.certification_three,
        settings.certification_four,
        settings.certification_five,
        settings.certification_six
      ].filter(Boolean) // Remove null/undefined values
    },
    siteInfo: {
      name: settings.site_name || "Ramaiah Memorial Hospital",
      description: "Comprehensive Healthcare Services"
    },
    rawSettings: apiData.data // Include raw settings for alt text generation
  };
};

// Async thunk for fetching site settings
export const fetchSiteSettings = createAsyncThunk(
  'services/fetchSiteSettings',
  async (_, { rejectWithValue }) => {
    try {
      // First try the real API
      const response = await fetch(`${API_BASE_URL}/site/settings`, {
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
      return transformSiteSettings(data);
    } catch (error) {
      console.warn('Real API failed, using mock data:', error.message);
      // Return mock data if real API fails
      return mockSiteSettings;
    }
  }
);

const initialState = {
  siteSettings: null,
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSiteSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.siteSettings = action.payload;
        state.error = null;
      })
      .addCase(fetchSiteSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = servicesSlice.actions;
export default servicesSlice.reducer;
