import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import CredentialsContext from "../context/credentials-context";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import App from "../components/App";

export const history = createBrowserHistory();

const AppRouter = () => (
  const [userName, setUserName] = useState('');

const handleSetUserName = (user) => {
    setUserName(user);
  };

  <Router history={history}>
    <CredentialsContext.Provider value={{ userName, handleSetUserName }}>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/notes" component={App} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </CredentialsContext>
  </Router>
);

export { AppRouter as default };
