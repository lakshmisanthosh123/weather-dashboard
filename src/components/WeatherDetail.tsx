
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to access route parameters
import { fetchWeathers ,fetchForecasts} from '../api/weatherAPI';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  WeatherContainer,
  CurrentWeather,
  Weatherdetails,
  ForecastContainer,
  ForecastCard,
  WeatherIcon,
  chartContainer,
} from '../styles/WeatherStyles';
import GlobalStyles  from '../styles/GlobalStyles';
import TemperatureTrendsGraph from './TemperatureGraph';


const WeatherDetail: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();  // Extract cityName from route parameters
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
 

  useEffect(() => {
    if (cityName) {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null); // Reset error before making a new request

      try {
        const data = await fetchWeathers(cityName);
        console.log(data)
        console.log(data.wind.speed)
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    const fetchForecast= async () => {
      setLoading(true);
      setError(null); // Reset error before making a new request

      try {
        const data = await fetchForecasts(cityName?.toString() ?? 'Default City');
        setForecast(data.list);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    fetchForecast();
  }
  }, [cityName]);
  if (loading) {
    return <div>Loading weather data for {cityName}...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };
 
  const uniqueData = forecast.filter((item, index, self) =>
    index === self.findIndex((obj) => new Date(obj.dt_txt).toLocaleDateString() === new Date(item.dt_txt).toLocaleDateString() )
  );
 

  return (
    <>
     <WeatherContainer>
      <GlobalStyles darkMode={darkMode}/>
     
      
      <CurrentWeather>
      
        <h2>Current Weather</h2>
        <WeatherIcon src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
        <Weatherdetails>Temperature: {weather.main.temp}°C</Weatherdetails>
        <Weatherdetails>Feels Like: {weather.main.feels_like}°C</Weatherdetails>
        <Weatherdetails>Humidity: {weather.main.humidity}%</Weatherdetails>
        <Weatherdetails>Wind Speed: {weather.wind.speed} km/h</Weatherdetails>
        <Weatherdetails>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</Weatherdetails>
        <Weatherdetails>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</Weatherdetails>
      </CurrentWeather>

      {/* 5-Day Forecast Section */}
      <h3>5-Day Forecast</h3>
      <ForecastContainer>
        {uniqueData.slice(0, 5).map((day, index) => (
          <ForecastCard key={index}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <WeatherIcon src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" />
            <p>Temp: {day.main.temp}°C</p>
            <p>{day.weather[0].description}</p>
          </ForecastCard>
        ))}
      </ForecastContainer>
      
     
      
     
    </WeatherContainer>
     <TemperatureTrendsGraph />
     </>
  );
};

export default WeatherDetail;


