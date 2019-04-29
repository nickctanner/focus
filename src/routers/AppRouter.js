import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import { createBrowserHistory } from "history";

import CredentialsContext from "../context/credentials-context";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import App from "../components/App";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [uid, setUid] = useState("");
  const [isAutenticated, setIsAuthenticated] = useState(false);

  useEffect(
    () => {
      const user = firebase.auth().currentUser;
      if (user) {
        setUid(user.uid);
        setIsAuthenticated(!!user.uid);
        setUserEmail(user.email);
        setUserAvatar(user.photoURL);
      }
      console.log(uid, isAutenticated);
    },
    [isAuthenticated]
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router history={history}>
      <CredentialsContext.Provider
        value={{
          userEmail,
          userAvatar,
          uid,
          isAutenticated,
          handleLogout,
          handleLogin
        }}
      >
        <div>
          <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/notes" component={App} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </CredentialsContext.Provider>
    </Router>
  );
};

export { AppRouter as default };
