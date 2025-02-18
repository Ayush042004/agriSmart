import React, { useState } from 'react';
import InputForm from './InputForm.jsx';
import AlertDisplay from './AlertDisplay';


function Wheather({data}) {
  const [alerts, setAlerts] = useState([]);

  return (
    <div className="App">
      <h1>Farm Alert System</h1>
      <InputForm setAlerts={setAlerts} data={data}/>
      <AlertDisplay alerts={alerts} />
    </div>
  );
}

export default Wheather;