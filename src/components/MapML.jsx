import React, { useState } from "react";
import Weather from "./Wheather.jsx";
import { useLocation } from "react-router-dom";

function MapML() {
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(true);
  const location = useLocation();
  const data = location.state;


  return (
    <div>
      {/* Render ML Data */}
      <h2>ML Model Predictions</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Button to open Weather Modal */}
      <button onClick={() => setIsWeatherModalOpen(true)}>Check Weather</button>

      {/* Weather Modal */}
      {isWeatherModalOpen && <Weather data = {data}/>}
    </div>
  );
}

export default MapML;
