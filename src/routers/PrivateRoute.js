import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CredentialsContext from "../context/credentials-context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAutenticated } = useContext(CredentialsContext);
  return (<Route
    {...rest}
    component={props => (isAutenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />);
};
