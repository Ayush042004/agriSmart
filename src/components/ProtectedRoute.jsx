import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-xl mb-4">Please log in to access this page.</h1>
          <Navigate to="/login" />
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
