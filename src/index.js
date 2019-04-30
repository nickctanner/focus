import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "./firebase/firebase";
import AppRouter, { history } from "./routers/AppRouter";

import LoadingPage from './components/LoadingPage';

import "./styles.css";

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<AppRouter />, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/notes");
    }
  } else {
    renderApp();
    history.push("/");
    console.log('logged out');
  }
});
