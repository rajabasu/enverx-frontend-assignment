import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userData = sessionStorage.getItem('userData');

  // Check if user is present/already logged in or not.
  // If logged in stay in same page or navigate back to login page
  return userData ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;
