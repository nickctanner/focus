import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import App from "../components/App";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/notes" component={App} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default };
