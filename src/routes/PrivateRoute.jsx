import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center pt-4">
        <Spinner variant="primary"></Spinner>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return (
    <>
      <Navigate to={"/login"} replace />
    </>
  );
};

export default PrivateRoute;
