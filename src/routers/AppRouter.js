import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebase';
import { createBrowserHistory } from 'history';

import CredentialsContext from '../context/credentials-context';
import LoginPage from '../components/LoginPage';
import App from '../components/App';
import LoadingPage from '../components/LoadingPage';
import NotFoundPage from '../components/NotFoundPage';

const history = createBrowserHistory();

const AppRouter = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [uid, setUid] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    let subscribed = true;

    const renderApp = () => {
      if (!hasRendered) {
        setHasRendered(true);
      }
    };

    if (subscribed) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUid(user.uid);
          setUserEmail(user.email);
          setUserAvatar(user.photoURL);
          setIsAuthenticated(true);
          history.push('/notes');
          renderApp();
          return <Redirect to='/notes' />;
        } else {
          setIsAuthenticated(false);
          history.push('/');
          renderApp();
          return <Redirect to='/' />;
        }
      });
    }
    // firebase.auth().onAuthStateChanged(user => {
    //   if (subscribed) {
    //     if (user) {
    //       setUid(user.uid);
    //       setUserEmail(user.email);
    //       setUserAvatar(user.photoURL);
    //       setIsAuthenticated(true);
    //       history.push('/notes');
    //       renderApp();
    //       return <Redirect to='/notes' />;
    //     } else {
    //       setIsAuthenticated(false);
    //       history.push('/');
    //       renderApp();
    //       return <Redirect to='/' />;
    //     }
    //   }
    // });

    return () => {
      subscribed = false;
    };
  });

  return hasRendered ? (
    <Router history={history}>
      <CredentialsContext.Provider
        value={{ userEmail, userAvatar, uid, isAuthenticated }}
      >
        <div>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/notes' component={App} />
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
