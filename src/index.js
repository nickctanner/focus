import React from "react";
import ReactDOM from "react-dom";
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

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // store.dispatch(login(user.uid));
    // store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/notes");
    }
    console.log('logged in');
    // });
  } else {
    // store.dispatch(logout());
    renderApp();
    history.push("/");
    console.log('logged out');
  }
});


