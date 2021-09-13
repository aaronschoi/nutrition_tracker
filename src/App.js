import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}