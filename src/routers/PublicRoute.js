import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CredentialsContext from "../context/credentials-context";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated} = useContext(CredentialsContext);
  return (
    <Route
      {...rest}
      component={props =>
        isAutenticated ? <Redirect to="/notes" /> : <Component {...props} />
      }
    />
  );
};
