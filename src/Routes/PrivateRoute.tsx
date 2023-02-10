import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const sessionKey = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const isLogIn = sessionStorage.getItem(sessionKey);

  return isLogIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
