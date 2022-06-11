import { configureStore } from '@reduxjs/toolkit';
import CarReducer from '../features/car/carslice';
export const store = configureStore({
  reducer: {
   car: CarReducer 
  },
});
