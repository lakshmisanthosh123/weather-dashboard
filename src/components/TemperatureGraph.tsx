
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchForecasts } from '../api/weatherAPI';
import { useParams } from 'react-router-dom';  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const TemperatureTrendsGraph: React.FC= () => {
  const { cityName } = useParams<{ cityName: string }>(); 
  const [forecastData, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cityName) {
    
    const fetchForecast= async () => {
      setLoading(true);
      setError(null); 

      try {
        const data = await fetchForecasts(cityName?.toString() ?? 'Default City');
        setForecast(data.list);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
console.log(forecastData);
   
    fetchForecast();
  }
  }, [cityName]);

  // Preparing the data for the chart
  const chartData = {
    labels: forecastData.map((forecast) => new Date(forecast.dt_txt).toLocaleString()), // Map forecast time to labels
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastData.map((forecast) => forecast.main.temp), // Map temperature data
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date & Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  if (loading) {
    return <div>Loading temperature trends...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>Temperature Trends for {cityName} </h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TemperatureTrendsGraph;
