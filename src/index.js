import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherDashboard from './components/App'; // Импорт WeatherDashboard
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherDashboard />
  </React.StrictMode>
);
