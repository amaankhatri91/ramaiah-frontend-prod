import { configureStore } from '@reduxjs/toolkit';
import servicesSlice from './slices/servicesSlice';
import heroSectionSlice from './slices/heroSectionSlice';

export const store = configureStore({
  reducer: {
    services: servicesSlice,
    heroSection: heroSectionSlice, 
  },
});

// For TypeScript users, these would be type exports, but since we're using .js files,
// we'll export the store and let components use useSelector and useDispatch directly
