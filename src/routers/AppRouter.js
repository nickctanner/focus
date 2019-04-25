import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import CredentialsContext from "../context/credentials-context";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import App from "../components/App";

export const history = createBrowserHistory();

const AppRouter = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const handleSetUserDisplay = (user) => {
    setUserEmail(user.email);
    setUserAvatar(user.avatar);
  };

  return (
    <Router history={history}>
      <CredentialsContext.Provider value={{ userEmail, userAvatar, handleSetUserDisplay }}>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/notes" component={App} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </CredentialsContext.Provider>
    </Router>
  );
}

export { AppRouter as default };
