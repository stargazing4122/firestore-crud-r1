import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { auth } from '../firebase/config';

import LoginScreen from '../components/auth/LoginScreen';
import JournalScreen from '../components/journal/JournalScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ChekingScreen from '../components/checking/ChekingScreen';
import { useDispatch } from 'react-redux';
import { doAuthLogin } from '../actions/authActions';
import { startLoadNotes } from '../actions/notesActions';

const AppRouter = () => {
  //hooks
  const [isAuth, setIsAuth] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        setIsAuth(true);
        dispatch(doAuthLogin(user.uid, user.displayName));
        dispatch(startLoadNotes());
      } else {
        setIsAuth(false);
      }
      setIsChecking(false);
    });
  }, []);

  //other
  if (isChecking) {
    return <ChekingScreen />;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/auth"
          component={LoginScreen}
          isAuth={isAuth}
        />
        <PrivateRoute
          exact
          path="/"
          component={JournalScreen}
          isAuth={isAuth}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
