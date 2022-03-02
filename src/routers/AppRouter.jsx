import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import JournalScreen from '../components/journal/JournalScreen'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route 
          exact
          path="/auth" 
          component={LoginScreen} 
        />
        <Route 
          exact
          path="/" 
          component={JournalScreen} 
        />

      </Switch>
    </Router>
  )
}

export default AppRouter;
