import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, socket: socket, ...rest }) {
  const token = localStorage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? (
          <Component {...rest} socket={socket} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
