
import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetail: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return (
    <div>
      <h2>Weather Details for {cityName}</h2>
      {/* Display detailed weather information for the city */}
    </div>
  );
};

export default CityDetail;
