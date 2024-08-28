
import { createSlice } from '@reduxjs/toolkit';


interface CityState {
    cities: string[]; 
  }
  
  const initialState: CityState = {
    cities: [],
  };
const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
      
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citySlice.actions;
export default citySlice.reducer;
