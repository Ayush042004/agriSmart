import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InputForm = ({ setAlerts, data }) => {
  const [temperature, setTemperature] = useState('');
  const [precipitation, setPrecipitation] = useState('');
  const [pressure, setPressure] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [cropName, setCropName] = useState('');
  const [growthStage, setGrowthStage] = useState('');

  // ✅ Populate state from the passed data prop
  useEffect(() => {
    if (data && data.data) {
      // Accessing values under `sg` for each property
      if (data.data.airTemperature && data.data.airTemperature.sg !== undefined) {
        setTemperature(data.data.airTemperature.sg);
      }
      
      if (data.data.precipitation && data.data.precipitation.sg !== undefined) {
        setPrecipitation(data.data.precipitation.sg);
      }
      
      if (data.data.pressure && data.data.pressure.sg !== undefined) {
        setPressure(data.data.pressure.sg);
      }
      
      if (data.data.windSpeed && data.data.windSpeed.sg !== undefined) {
        setWindSpeed(data.data.windSpeed.sg);
      }
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const weatherData = {
      temperature,
      precipitation,
      pressure,
      windSpeed
    };

    const cropData = {
      crop_name: cropName,
      growth_stage: growthStage
    };

    try {
      const response = await axios.post('http://localhost:5000/get_farming_alert', {
        weather: weatherData,
        crop_details: cropData
      });

      setAlerts(response.data.alerts);  // Set the alerts in the parent component
    } catch (error) {
      console.error("Error fetching farming alerts:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Temperature (°C):</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Precipitation (mm):</label>
        <input
          type="number"
          value={precipitation}
          onChange={(e) => setPrecipitation(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Pressure (hPa):</label>
        <input
          type="number"
          value={pressure}
          onChange={(e) => setPressure(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Wind Speed (km/h):</label>
        <input
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Crop Name:</label>
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Growth Stage:</label>
        <input
          type="text"
          value={growthStage}
          onChange={(e) => setGrowthStage(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Get Alerts
      </button>
    </form>
  );
};

export default InputForm;