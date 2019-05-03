import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import { createBrowserHistory } from "history";

import CredentialsContext from "../context/credentials-context";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import LoadingPage from "../components/LoadingPage";
import App from "../components/App";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [uid, setUid] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  const renderApp = () => {
    if (!hasRendered) {
      setHasRendered(true);
    }
  };

  useEffect(() => {
    let subscribed = true;
    // return firebase...?
    firebase.auth().onAuthStateChanged(user => {
      if (subscribed) {
        if (user) {
          setUid(user.uid);
          setUserEmail(user.email);
          setUserAvatar(user.photoURL);
          setIsAuthenticated(true);
          history.push("/notes");
          renderApp();
        } else {
          setIsAuthenticated(false);
          history.push("/");
          renderApp();
          console.log(isAuthenticated);
        }
      }
    });

    return () => (subscribed = false);
    // Dependent on hasRendered?
  }, []);

  return hasRendered ? (
    <Router history={history}>
      <CredentialsContext.Provider
        value={{ userEmail, userAvatar, uid, isAuthenticated }}
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
  ) : (
    <LoadingPage />
  );
};

export { AppRouter as default };
