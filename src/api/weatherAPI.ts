
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_KEY = 'b527f567baa299a7e7d64fa0c7e5bda5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeathers = async(city: string) => {
  try {
  const response= await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

    // Check if the response is valid
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    // Handle and re-throw the error
    handleApiError(error);
    throw error; // Optionally re-throw to handle it in the calling function
  }
};

// Handle different types of errors
const handleApiError = (error: any) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error(`API responded with an error: ${error.response.status} - ${error.response.statusText}`);
  } else if (error.request) {
    // No response was received after the request was made
    console.error("No response received from the server. Please check your network connection.");
  } else {
    // Something happened during the request setup
    console.error(`Error in setting up the request: ${error.message}`);
  }

};

export const fetchForecasts = async (city: string) => {
  try {
    const response= await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    if (response.status !== 200) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    // Handle and re-throw the error
    handleApiError(error);
    throw error; // Optionally re-throw to handle it in the calling function
  }

};


export const fetchAQI = createAsyncThunk(
  'aqi/fetchAQI',
  async (location: { lat: number, lon: number }) => {
    const response = await axios.get(`API_URL_FOR_AQI`, {
      params: { lat: location.lat, lon: location.lon, /* API_KEY */ }
    });
    return response.data;
  }
);
