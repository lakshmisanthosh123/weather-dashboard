
import React from 'react';
import CityList from './CityList'; 
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import GlobalStyles  from '../styles/GlobalStyles';
import ThemeToggle from './ThemeToggle';
import { lightTheme, darkTheme } from '../theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const WeatherDashboard: React.FC = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);


  return (
    <div>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles darkMode={darkMode}/>
      <h1>Weather Dashboard</h1>
      <ThemeToggle/>
      <CityList />
       
       </ThemeProvider>
    </div>
  );
};

export default WeatherDashboard;
