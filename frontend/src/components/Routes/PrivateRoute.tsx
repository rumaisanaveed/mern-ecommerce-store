import React from "react";
import { useAppSelector } from "../../hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
