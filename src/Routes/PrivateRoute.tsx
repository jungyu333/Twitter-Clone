import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from 'redux/store';

function PrivateRoute() {
  const { user } = useSelector((state: RootState) => state.login);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
