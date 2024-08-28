import styled from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f8ff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

export const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #00aaff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin-bottom: 20px;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const Weatherdetails = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ForecastCard = styled.div`
  flex-basis: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #00aaff;
  border-radius: 10px;
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    margin: 5px 0;
  }

  &:hover {
    background-color: #e0f7fa;
    transition: background-color 0.3s;
  }

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    flex-basis: 45%;
    margin: 10px;
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;

export const WeatherIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 10px 0;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const chartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f8ff;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;

  /* Responsive for smaller screens */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;
