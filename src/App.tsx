
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const WeatherDashboard = React.lazy(() => import('./components/WeatherDashboard'));
const WeatherDetail = React.lazy(() => import('./components/WeatherDetail'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<WeatherDashboard />} />
          <Route path="/city/:cityName" element={<WeatherDetail />} />  {/* Correctly passing cityName */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
