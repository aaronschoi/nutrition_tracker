import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing-page/Landing';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

export default function App() {

  const isLoggedIn = useSelector((states) => states.isLoggedIn)

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {isLoggedIn ? <Layout /> : <Landing />}
        </Route>
      </Switch>
    </div>
  );
}