import React from "react";
import { Route, Redirect } from "react-router-dom";
import CredentialsContext from "../context/credentials-context";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { uid } = useContext(CredentialsContext);
  return;
  <Route
    {...rest}
    component={props =>
      uid ? <Redirect to="/notes" /> : <Component {...props} />
    }
  />;
};
