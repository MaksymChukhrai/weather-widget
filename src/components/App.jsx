import React, { useState } from 'react';


function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [previousSearches, setPreviousSearches] = useState([]);
  const [error, setError] = useState('');
  const mockWeatherData = {
    'New York': { 
      temperature: '22°C', 
      humidity: '56%', 
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': { 
      temperature: '15°C', 
      humidity: '70%', 
      windSpeed: '20 km/h' 
    },
  };
  const handleSearch = () => {
    if (mockWeatherData[city]) {
      setWeatherData(mockWeatherData[city]);
      setPreviousSearches((prev) => [...new Set([city, ...prev])]);
      setError('');
    } else {
      setWeatherData(null);
      setError('City not found.');
    }
  };

  const handlePreviousSearchClick = (searchedCity) => {
    setCity(searchedCity);
    setWeatherData(mockWeatherData[searchedCity]);
    setError('');
  };

  return (
    <div>
      <input
        type="text"
        id="citySearch"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>

      {error && <div>{error}</div>}

      {weatherData && (
        <div id="weatherData">
          <div>Temperature: {weatherData.temperature}</div>
          <div>Humidity: {weatherData.humidity}</div>
          <div>Wind Speed: {weatherData.windSpeed}</div>
        </div>
      )}

      <div id="previousSearches">
        {previousSearches.map((searchedCity) => (
          <button
            key={searchedCity}
            onClick={() => handlePreviousSearchClick(searchedCity)}
          >
            {searchedCity}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;