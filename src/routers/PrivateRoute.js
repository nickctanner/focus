import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CredentialsContext from "../context/credentials-context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
<<<<<<< HEAD
  const { isAuthenticated } = useContext(CredentialsContext);
  return (<Route
    {...rest}
    component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
=======
  const { isAutenticated } = useContext(CredentialsContext);
  return (<Route
    {...rest}
    component={props => (isAutenticated ? <Component {...props} /> : <Redirect to="/" />)}
>>>>>>> f731521af67b0eb4975ac35893075fa7f6ea371a
  />);
};
