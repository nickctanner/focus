import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CredentialsContext from "../context/credentials-context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { uid } = useContext(CredentialsContext);
  return (<Route
    {...rest}
    component={props => (uid ? <Component {...props} /> : <Redirect to="/" />)}
  />);
};
