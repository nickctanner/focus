import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routers/AppRouter";

import "./styles.css";

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<AppRouter />, document.getElementById("root"));
    hasRendered = true;
  }
};

const InitApp = () => {

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // store.dispatch(login(user.uid));
      // store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/notes");
        return <Redirect to="/notes" />
      }
      // });
    } else {
      // store.dispatch(logout());
      renderApp();
      history.push("/");
      return <Redirect to="/" />
    }
  });
};

InitApp();

