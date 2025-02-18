import React from 'react';

// const AlertDisplay = ({ alerts }) => {
//   return (
//     <div>
//       <h2>Farming Alerts</h2>
//       {alerts && alerts.length > 0 ? (
//         <ul>
//           {alerts.map((alert, index) => (
//             <li key={index}>{alert}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No alerts yet. Please enter weather and crop details to get alerts.</p>
//       )}
//     </div>
//   );
// };

const AlertDisplay = ({ alerts }) => {
  if (Array.isArray(alerts)) {
    return (
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Farming Alerts:</h3>
        <ul className="list-disc list-inside space-y-2">
          {alerts.map((alert, index) => (
            <li key={index} className="text-gray-700 bg-gray-100 p-2 rounded-md">
              {alert}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg p-4 border border-gray-300">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Farming Alerts:</h3>
        <p className="text-gray-700 bg-white p-3 rounded-md">{alerts}</p>
      </div>
    );
  }
};

export default AlertDisplay;